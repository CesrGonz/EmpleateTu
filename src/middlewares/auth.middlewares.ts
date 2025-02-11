import { Response, Request, NextFunction } from 'express'
import jwt from "jsonwebtoken"
import { CustomJwtPayload } from '../utils/CustomJwtPayloads'


const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || 'pass'

export const isAuthenticated = (req:Request, res:Response, next:NextFunction):any => {

    //const token = req.headers.authorization?.split(" ")[1]
    const token = req.cookies.token
    if(!token) return res.status(401).json({error: 'Access denied'})

    try{
        const tokenDecodificado = jwt.verify(token, TOKEN_PASSWORD)
        req.user = tokenDecodificado as CustomJwtPayload
        console.log('usuario autenticado', req.user)
        next()
    }catch(error){
        console.error("Error in isAuthenticated middleware:", error);
        res.status(500).send("Internal Server Error");
    }
}