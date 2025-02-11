<<<<<<< HEAD
import { Request, Response, NextFunction } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.user);
    const { role } = req.user;
    try {
        if (role === 'admin') {
            next();
        } else {
            res.status(401).json({ error: 'Access denied, no admin' });
        }
    } catch (error) {
        console.error("Error in isAdmin middleware:", error);
        res.status(500).send("Internal Server Error");
    }
};
=======
import {Response, Request, NextFunction} from 'express'

export const isAdmin = (req:Request, res:Response, next:NextFunction):any => {
    const {role} = req.body
    req.cookies
    req.params
    req.body
    try{
        if(role === 'admin'){
            next()
        }else{
            res.status(401).json({error:'Access denied, no admin'})
        }
    }catch(error){
        res.status(401).json({error:'Invalid token'})
    }
}
>>>>>>> dd119fccd3b466aee8bd1f158d15e1804132adf9
