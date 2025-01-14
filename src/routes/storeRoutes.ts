import express from 'express';
import { getStores, createStore } from '../controllers/storeController';

const router = express.Router();

router.get("/", getStores);
router.post('/', createStore);

export default router;