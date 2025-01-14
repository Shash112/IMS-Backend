import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";

export const notFoundHandler = (req: Request, res: Response, next: NextFunction): void => {
    next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
};

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    let customEror = err;

    if(!(err instanceof AppError)) {
        customEror = new AppError("An unexpected error occurred", 500, false);
    }

    const appError = customEror as AppError;

    console.error(`Error: ${appError.message}`);
    if(!appError.isOperational) {
        console.error("Stack: ", appError.stack);
    }

    res.status(appError.statusCode || 500).json({ 
        status: "error",
        message: appError.message || "Something went wrong",
    });
};