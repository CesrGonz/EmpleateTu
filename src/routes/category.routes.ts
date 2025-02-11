<<<<<<< HEAD
import { CategoryController } from "../controlers/category.controller";
import { Router } from "express";
const router = Router();

router.get("/", CategoryController.getAll);
 router.get("/:id", CategoryController.getById);
router.post("/", CategoryController.create);
router.put("/:id", CategoryController.update);
router.delete("/:id", CategoryController.delete); 
=======
import { Router } from "express";
import {AuthController} from '../controlers/auth.controller'
import { loginValidation, registerValidation } from "../middlewares/validators.middlewares";
import { ValidationMiddleware } from "../middlewares/validation.middlewares";
const router = Router()



>>>>>>> dd119fccd3b466aee8bd1f158d15e1804132adf9

export default router