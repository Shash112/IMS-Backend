import mongoose, { Document, Schema, Model } from "mongoose";

interface IProduct extends Document {
    name: string,
    description: string,
    quantity: number,
    price: number,
    // supplier: mongoose.Schema.Types.ObjectId
}

const ProductSchema: Schema<IProduct> = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        // supplier: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Supplier',
        //     required: true,
        // },
    },
    {
        timestamps: true,
    }
);

const Product: Model<IProduct> = mongoose.model<IProduct>("Product", ProductSchema);

export { IProduct };
export default Product;