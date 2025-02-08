import { Router } from "express";
import {AuthController} from '../controlers/auth.controller'
import { loginValidation, registerValidation } from "../middlewares/validators.middlewares";
import { ValidationMiddleware } from "../middlewares/validation.middlewares";
const router = Router()




export default router