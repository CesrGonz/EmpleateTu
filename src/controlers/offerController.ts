import { NextFunction,Request,Response } from "express";
import { OfferService } from "../services/offer.services";

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

    static async update(req:Request,res:Response,next:NextFunction){
        try{
            const OfferData = req.body
            const OfferId = OfferData.id
            const newOffer = await OfferService.save(OfferData, OfferId)
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
            const userId = req.body.id
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
}