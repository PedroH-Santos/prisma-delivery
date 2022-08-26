
import { CreateDeliveryManUseCase } from "./CreateDeliveryManUseCase"
import { Request,Response } from "express"

export class CreateDeliveryManController {

    async handle(request: Request, response: Response){
        
const { username, password} = request.body;

        const createDeliveryManUseCase = new CreateDeliveryManUseCase();
        const result = await createDeliveryManUseCase.execute({
            username,
            password
        })
        return response.json(result); 

    }
}