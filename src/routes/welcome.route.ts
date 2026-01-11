import express from "express";
import {welcomeController} from "../controllers";

const router = express.Router();

router.get('/', welcomeController.welcome);

export default router;
