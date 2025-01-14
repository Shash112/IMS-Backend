import { NextFunction, Request, Response } from "express";
import Product from "../models/Product";
import AppError from "../utils/AppError";

export const getProducts = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        // const products = await Product.find().populate('supplierId');
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        next(error);
    }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
    }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        next(error);
    }
};