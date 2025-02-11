export class HttpException extends Error{
    public status: number
<<<<<<< HEAD

=======
    
>>>>>>> dd119fccd3b466aee8bd1f158d15e1804132adf9
    constructor(status:number, message: string){
        super(message)
        this.status = status
    }
}