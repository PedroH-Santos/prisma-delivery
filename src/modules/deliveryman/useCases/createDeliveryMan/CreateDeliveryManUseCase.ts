import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";



interface ICreateDeliveryMan {
    username: string;
    password: string;
}



export class CreateDeliveryManUseCase {
    
    
    async execute({password,username }: ICreateDeliveryMan) {

        const deliveryManExist = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    mode: "insensitive"
                }
            }
        })

        if(deliveryManExist){
            throw new Error("DeliveryMan already exists");
        }


        const hashPassword = await hash(password,10);

        const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword,
            }
        })

        return deliveryman;

        


    }
}