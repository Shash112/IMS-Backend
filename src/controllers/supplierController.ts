import { Request, Response, NextFunction } from "express";
import Supplier from "../models/Supplier";

export const getSuppliers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const suppliers = await Supplier.find();
        res.status(200).json(suppliers);
    } catch (error) {
        next(error);
    }
};

export const createSupplier = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const newSupplier = new Supplier(req.body);
        const savedSupplier = await newSupplier.save();
        res.status(201).json(savedSupplier);
    } catch (error) {
        next(error);
    }
};