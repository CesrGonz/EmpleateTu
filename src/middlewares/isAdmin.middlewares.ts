import { Request, Response, NextFunction } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const role = req.user?.role
    try{
        if(role === 'admin'){
            next()
        }else{
            res.status(401).json({error:'Access denied, no admin'})
        }
    }catch(error){
        res.status(401).json({error:'Invalid token'})
    }
};
