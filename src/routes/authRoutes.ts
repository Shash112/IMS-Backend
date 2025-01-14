import express, { Response, NextFunction, Router } from "express";
import { register, login, authCheck } from "../controllers/authController";
import { authenticateUser } from "../middlewares/authMiddleware";
import { IUserRequest } from "../constant/IUserRequest";

const router: Router = express.Router();

router.post("/signup", (req, res, next) => void register(req, res, next));
router.post("/login", (req, res, next) => void login(req, res, next));
router.get("/verify",authenticateUser ,(req: IUserRequest, res: Response, next: NextFunction) => void authCheck(req, res, next));

export default router;