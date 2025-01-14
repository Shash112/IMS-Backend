import dotenv from "dotenv";

dotenv.config();

const validateEnv = (): void => {
    if (!process.env.DB_URL || !process.env.JWT_SECRET || !process.env.PORT) {
        throw new Error("Missing required environment variables.");
    }
};

export default validateEnv;