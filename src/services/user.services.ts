import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class UserService{

    static async getByEmail(email:string){
        const findUser = await prisma.user.findUnique({where: {email}, omit: {password:true}})
        if(!findUser) throw new Error("User not found")
    }

    
    static async getById(id:number){
        const findUser = await prisma.user.findUnique({where: {id}, omit: {password:true}})
        if(!findUser) throw new Error("User not found")
    }

}

