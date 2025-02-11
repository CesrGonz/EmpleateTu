<<<<<<< HEAD
import { UserService } from "../services/user.services"
import { Response, Request, NextFunction } from "express"
import { HttpException } from "../exceptions/httpException"

export class UserController{
    static async profile(req:Request, res:Response, next:NextFunction){
        try{
            const  email = req.user?.email
            if(!email) throw new HttpException(404, 'Email not found')
            const user = await UserService.getByEmail(email)
            res.status(200).json(user)
        }catch(error){
            next(error)
        }
    }

    static async getAll(req:Request, res:Response, next: NextFunction){
=======
import { UserService } from "@/services/user.services"
import { Response, Request } from "express"


export class UserController{
    static async profile(req:Request, res:Response){

        const email = req.body.email
        const user = await UserService.getByEmail(email)
        res.status(200).json(user)
    }

    static async getAll(req:Request, res:Response){

>>>>>>> dd119fccd3b466aee8bd1f158d15e1804132adf9
        try{
            const user = await UserService.getAll()
            res.status(200).json(user)
        }catch(error){
<<<<<<< HEAD
            next(error)
        }
=======
            res.status(404).json({message:"User list error" + error})
        }
      
>>>>>>> dd119fccd3b466aee8bd1f158d15e1804132adf9
    }
}