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