import { HttpException } from "@/exceptions/httpException"
import { PrismaClient, Offer } from "@prisma/client"

const prisma = new PrismaClient()


export class OfferService{
    static async getById(id: number){
        const findOffer = await prisma.offer.findUnique({where: {id}})
        if(!findOffer) throw new HttpException(404, "Offer not found") 
            return findOffer
    }

    static async getAll(title: string = ""){
        const findOffer = await prisma.offer.findMany({
            where : title ? {title: {contains: title}} : {},
            orderBy:{
                createdAt: "desc"
            }, take: 100
        })
        if(!findOffer) throw new HttpException(404, "Offer not found") 
            return findOffer
    }

    static async create(idUser: number ,offer: Offer){
        return await prisma.offer.create({data:{ ...offer, idUserCreator: idUser}})    
    }

    static async update(id: number , offer:Offer){
        const findOffer = prisma.offer.findUnique({where: {id}})
        if(isNaN(id)) throw new HttpException(404,"Offer doesnt exist")
        return await prisma.offer.update({
            where : {id},
            data: {
                ...offer

            }
        })
    }
    
    static async delete (id:number){
        return  prisma.offer.delete({where: {id}})
    }

    static async rate(idUser:number, idOffer:number, value:number ){
        const findOffer = await prisma.offer.findUnique({where: {id:idOffer}})
        if(!findOffer) throw new HttpException(404, "offer doesnt exists")
            //colocar en un middleware
        if(value < 0|| value >5) throw new HttpException(400, "Rate value must be between 1 and ")
        await prisma.rate.upsert({
        where:{
            idUser_idOffer:{
                idUser,idOffer
            }
        },
        update:{
            value
        },
        create:{
            idUser,idOffer,value
        }})
    }

    static async getRate(idOffer:number){
        //select avg(value)
        //from rate
        //where offerId = id
    const ratingStats = await prisma.rate.aggregate({
            where:{ idOffer },
            _avg:{value:true},
            _count:{value:true}
        })

        return{
            totalRatings: ratingStats._count.value,
            averageRatings : ratingStats._avg.value?.toFixed(2)
        }
    }
    static async save(offer: Offer, idOffer: number) {
        return await prisma.offer.update({
            where: {
                id: idOffer, // Correctamente estructurado
            },
            data: {
                ...offer, // Se asume que "offer" contiene solo campos válidos del modelo
            },
        });
    }

    static async getMyRate(idOffer:number, idUser:number){
        const findOffer = await prisma.offer.findUnique({where: {id:idOffer}})
        if(!findOffer) throw new HttpException(404, "offer doesnt exists")
        
            return await prisma.rate.findUnique({
            where:{
                idUser_idOffer:{idUser,idOffer}
            },select: {value:true}
        })
    }
    }
    
