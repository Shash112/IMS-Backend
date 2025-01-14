import { Request, Response, NextFunction } from "express";
import Order from "../models/Order";
import { promises } from "dns";

export const getOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const orders = await Order.find().populate('productId').populate('storeId');
        res.status(200).json(orders)
    } catch (error) {
        next(error);
    }
};

export const createOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        next(error);
    }
};
