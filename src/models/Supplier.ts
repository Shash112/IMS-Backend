import mongoose, { Document, Schema, Model } from "mongoose";

interface ISupplier extends Document {
    name: string;
    contact: string;
    email: string;
    address: string;
}

const supplierSchema: Schema<ISupplier> = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Supplier: Model<ISupplier> = mongoose.model<ISupplier>("Supplier", supplierSchema);

export { ISupplier };
export default Supplier;