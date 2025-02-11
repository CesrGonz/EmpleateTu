import { Router } from "express";
<<<<<<< HEAD
import { loginValidation, registerValidation } from "../middlewares/validators.middlewares";
import { ValidationMiddleware } from "../middlewares/validation.middlewares";
import { OffertController } from "../controlers/offert.controller";
import { isAuthenticated } from "../middlewares/auth.middlewares";
const router = Router()

//GET Listar todas las ofertas localhost:3000/api/offers/?title=react&category=dam
router.get('/', OffertController.getAll)
//localhost:3000/api/offers/xxxx
router.get('/:id', OffertController.getById)
//POST añadir una oferta nueva localhost:3000/api/offers/  {body}
router.post('/', isAuthenticated, OffertController.create)
//DELETE Borrar una oferta localhost:3000/api/offers/XXXX  
router.delete('/:id',isAuthenticated, OffertController.delete)
//PUT modificar una oferta localhost:3000/api/offers/XXXX  {body}
router.put('/:id',isAuthenticated, OffertController.update)   

// Calificamos una oferta x   {body}
router.post('/:id/rate/',isAuthenticated,OffertController.rate)  
// Vemos que calificación (total) se le ha data a una oferta X
router.get('/:id/rate/', isAuthenticated, OffertController.getRate)
=======
import {AuthController} from '../controlers/auth.controller'
import { loginValidation, registerValidation } from "../middlewares/validators.middlewares";
import { ValidationMiddleware } from "../middlewares/validation.middlewares";
import { OffertController } from "@/controlers/offerController";
const router = Router()

 
//GET Listar todas las ofertas localhost:3000/api/offerts/?title=react&category=dam
router.get('/', OffertController.getAll)
//POST añadir una oferta nueva localhost:3000/api/offerts/  {body}
router.post('/', OffertController.save)
//DELETE Borrar una oferta localhost:3000/api/offerts/XXXX  
router.delete('/:id', OffertController.delete)
//PUT modificar una oferta localhost:3000/api/offerts/XXXX  {body}
router.put('/:id', OffertController.update)   

// Calificamos una oferta x   {body}
router.post('/:id/rate/',OffertController.rate)  
// Vemos que calificación (total) se le ha data a una oferta X
router.get('/:id/rate/', OffertController.getRate)



>>>>>>> dd119fccd3b466aee8bd1f158d15e1804132adf9
export default router