import { Router } from "express";
import { UserController } from "../controlers/user.controller";
<<<<<<< HEAD
import {isAuthenticated} from "../middlewares/auth.middlewares"
import { isAdmin } from "../middlewares/isAdmin.middlewares";

const router = Router()

router.get('/profile', isAuthenticated , UserController.profile)
//router.get('/', isAuthenticate , UserController.profile)
//GET localhot:3000/api/users/
router.get('/', isAuthenticated, isAdmin , UserController.getAll)
=======
import {isAuthenticated} from "@middlewares/auth.middlewares"

const router = Router()

"api/users/"
router.get('/profile', isAuthenticated ,UserController.profile)
router.get('/', isAuthenticated ,UserController.profile)
>>>>>>> dd119fccd3b466aee8bd1f158d15e1804132adf9

export default router