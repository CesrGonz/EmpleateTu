<<<<<<< HEAD
import {prisma} from "database/database" 

=======
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
>>>>>>> dd119fccd3b466aee8bd1f158d15e1804132adf9

export class UserService{

    static async getByEmail(email:string){
        const findUser = await prisma.user.findUnique({where: {email}, omit: {password:true}})
        if(!findUser) throw new Error("User not found")
    }

    
    static async getById(id:number){
        const findUser = await prisma.user.findUnique({where: {id}, omit: {password:true}})
        if(!findUser) throw new Error("User not found")
    }

    static async getAll(){
      const users =  await prisma.user.findMany({
        omit:{password : true}
      })
        return users;
    }

}

