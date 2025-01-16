import mongoose, { Document, Schema, Model } from "mongoose";

interface IUser extends Document {
    name: string;
    role: string;
    email: string;
    password: string;
}

const UserSchema: Schema<IUser> = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["super admin", "admin", "user"],
            default: "user"
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export { IUser };
export default User;
