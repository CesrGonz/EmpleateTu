export interface customjwtPayload{
        colorFavortio : string,
        id: number,
        email: string,
        role: string
    

}
declare global {
    namespace Express {
        interface Request{
            user : customjwtPayload
        }
    }
}