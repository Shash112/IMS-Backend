import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppError from "../utils/AppError";

import { IUserRequest } from "../constant/IUserRequest";

interface IJwtPayload {
    id: string;
    name: string;
    role: string;
}

export const authenticateUser = (req: IUserRequest, res: Response, next: NextFunction): void => {
    const token = req.cookies.token;
    if(!token) {
        return next(new AppError("Unauthorized", 401));
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET as string) as IJwtPayload;
        console.log("Hi",user);
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}