import { Request, Response, NextFunction } from "express";
import Store from "../models/Store";

export const getStores = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const stores = await Store.find();
        res.status(200).json(stores);
    } catch (error) {
        next(error);
    }
};

export const createStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newStore = new Store(req.body);
        const savedStore = await newStore.save();
        res.status(201).json(savedStore);
    } catch (error) {
        next(error);
    }
};