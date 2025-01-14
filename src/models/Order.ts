import mongoose, { Document, Schema, Model } from "mongoose";

interface IOrder extends Document {
    productId: mongoose.Schema.Types.ObjectId;
    storeId: mongoose.Schema.Types.ObjectId;
    quantity: number;
    totalPrice: number;
    orderDate: Date;
}

const orderSchema: Schema<IOrder> = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        storeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Store',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        orderDate: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const Order: Model<IOrder> = mongoose.model<IOrder>("Order", orderSchema);

export { IOrder };
export default Order;