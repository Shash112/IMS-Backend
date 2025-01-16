import express, { Express } from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import authRoutes from "./routes/authRoutes";
import productRoutes from './routes/productRoutes';
import storeRoutes from './routes/storeRoutes';
import supplierRoutes from './routes/supplierRoutes';
import orderRoutes from './routes/orderRoutes';
import { notFoundHandler, errorHandler } from "./middlewares/errorMiddleware";
import cookieParser from 'cookie-parser';
import { authenticateUser } from "./middlewares/authMiddleware";

dotenv.config();
validateEnv();

const app:Express = express();

app.use(cors({
    origin: 'https://linen-mallard-632222.hostingersite.com',
    credentials: true,
}));
// app.use(cors());

app.use(helmet());
app.use(cookieParser());
app.use(express.json());

app.use("/", (req, res) => {
    res.status(200).json({"message": "Connected"});
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/suppliers", supplierRoutes);
app.use("/api/v1/stores", storeRoutes);
app.use("/api/v1/orders", orderRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
