import { Router } from "express";
import { UserController } from "../controlers/user.controller";
import {isAuthenticated} from "../middlewares/auth.middlewares"
import { isAdmin } from "../middlewares/isAdmin.middlewares";

const router = Router()

router.get('/profile', isAuthenticated , UserController.profile)
//router.get('/', isAuthenticate , UserController.profile)
//GET localhot:3000/api/users/
router.get('/', isAuthenticated, isAdmin , UserController.getAll)

export default router