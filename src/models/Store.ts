import mongoose, { Document, Schema, Model } from "mongoose";

interface IStore extends Document {
    name: string;
    branch: string;
    location: string;
    managerName: string;
}

const storeSchema: Schema<IStore> = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        branch: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        managerName: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Store: Model<IStore> = mongoose.model<IStore>("Store", storeSchema);

export { IStore };
export default Store;
