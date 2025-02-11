import Router from "express";
import {AuthController} from "../controlers/auth.controller";
<<<<<<< HEAD
import { loginValidation, registerValidation } from "../middlewares/validators.middlewares";
import { ValidationMiddleware } from "../middlewares/validation.middlewares";
const router = Router();

router.post('/login', loginValidation, ValidationMiddleware, AuthController.login)
// router.post('/logout', AuthController.logout)
router.post('/register', registerValidation, ValidationMiddleware, AuthController.register)
=======
const router = Router();

router.post('/login',AuthController.login)
router.post('/register',AuthController.register)
>>>>>>> dd119fccd3b466aee8bd1f158d15e1804132adf9


export default router;