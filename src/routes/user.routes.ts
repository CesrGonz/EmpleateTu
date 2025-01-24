import { Router } from "express";
import { UserController } from "../controlers/user.controller";
import {isAuthenticated} from "@middlewares/auth.middleware"

const router = Router()

router.get('/profile', isAuthenticated ,UserController.profile)

export default router