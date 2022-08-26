import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";




interface IAuthenticateDeliveryMan {
    username: string;
    password: string;
}


export class AuthenticateDeliveryManUseCase {

    async execute({ username, password}: IAuthenticateDeliveryMan) {
        
        const deliveryman: any = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        })

        if(!deliveryman){
            throw new Error(" Username or password is incorrect");
        }
        
        
        const passwordMatch = await compare(password,deliveryman?.password);

        if(!passwordMatch){
            throw new Error(" Username or password is incorrect");
        }


        const token = sign({username}, "2b90454a2e7013a137d5c2b061575cdc86a994bd", {
            subject: deliveryman?.id,
            expiresIn: "1d"
        });

        return token;

    }   
}