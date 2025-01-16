import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import User, { IUser } from "../models/User";
import AppError from "../utils/AppError";
import { IUserRequest } from "../constant/IUserRequest";

const SALT_ROUNDS = 10;

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log(req.body);
    const { name, role, email, password} = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(new AppError("User already exists", 400));
        }

        const hashedpassword = await bcryptjs.hash(password, SALT_ROUNDS);
        const newUser = new User({ name, role, email, password: hashedpassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully "}); 
    } catch (error) {
        console.log(error)
        next(error);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user) {
            return next(new AppError("User not found", 404));
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return next(new AppError("Invalid credentials", 401));
        }

        const userData = { id: user.id, name: user.name, role: user.role }
        const token = jwt.sign(userData, process.env.JWT_SECRET || "", {expiresIn: "1h"});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
            maxAge: 3600000,
        })
        res.status(200).json({ message: "Login successful", userData});
    } catch (error) {
        next(error);
    }
}

export const authCheck = async (req: IUserRequest, res: Response, next: NextFunction): Promise<void> => {
    console.log("Nice",req.user);
    const userData = req.user;
    res.status(200).json({ message: "Login successful", userData});
}
