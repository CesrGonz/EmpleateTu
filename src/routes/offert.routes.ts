import { Router } from "express";
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



export default router