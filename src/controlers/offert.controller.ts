import { OfferService } from "../services/offer.services";
import { NextFunction, Request,Response } from "express";
import { Offer, Prisma } from "@prisma/client";
import { prisma } from "../database/database";
import { HttpException } from "../exceptions/httpException";

export class OffertController{

    static async getAll(req:Request,res:Response, next:NextFunction){
        try{
            const offers = await OfferService.getAll()
            res.status(200).json(offers)
        }catch(error){
            next(error)
        }
    }

    static async getById(req:Request, res:Response, next:NextFunction){
        try{
            const offerId = Number.parseInt(req.params.id)
            const offer = await OfferService.getById(offerId)
            res.status(200).json(offer)
        }catch(error){
            next(error)
        }
    }

    static async save(req:Request,res:Response,next:NextFunction){
        try{
            const OfferData = req.body
            const newOffer = await OfferService.save(OfferData, OfferData.id)
            res.status(201).json({message: "Offer created succesfully"})
        }catch(error){
            next(error)
        }
    }
    static async delete(req:Request, res:Response, next:NextFunction){
        try{
            
            const Id = Number.parseInt(req.params.id)
            const deletedOffer = await OfferService.delete(Id)
            res.status(201).json({message: "Offer deleted succesfully"})
        }catch(error){
            next(error)
        }
    }

    static async rate(req:Request, res:Response, next:NextFunction){
        try{
            const {value} = req.body
            const id = Number.parseInt(req.params.id)
            const userId = req.body.user.id
            await OfferService.rate(userId,id,value)
            res.status(200).json({message: "Offer rate succesfully"})
        }catch(error){
            next(error)
        }
       
    }

    static async getRate(req:Request, res:Response, next:NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            await OfferService.getRate(id)
            res.status(200).json({message: "Offer rate succesfully"})
       }catch(error){
        next(error)
    }   
    }

   static async update(req:Request, res:Response, next: NextFunction){
        try{
            const offerData = req.body
            const id = Number.parseInt(req.params.id)
            if (isNaN(id)) throw new HttpException(400, "Invalid offer ID");

            const updatedOffer = await OfferService.update(id, offerData)
            res.status(200).json(updatedOffer)
        }catch(error){
            next(error)
        }
    }
    static async create(req:Request, res:Response, next: NextFunction){
        try{
            const offerData = req.body
            const userId = req.user?.id
            if (!userId) throw new HttpException(400, "User creator ID is required");

            const newOffer = await OfferService.create(userId, offerData)
            res.status(200).json(newOffer)
        }catch(error){
            next(error)
        }
    }
}