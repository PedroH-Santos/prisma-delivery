import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";




interface IAuthenticateClient {
    username: string;
    password: string;
}


export class AuthenticateClientUseCase {

    async execute({ username, password}: IAuthenticateClient) {
        
        const client: any = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if(!client){
            throw new Error(" Username or password is incorrect");
        }
        
        
        const passwordMatch = await compare(password,client?.password);

        if(!passwordMatch){
            throw new Error(" Username or password is incorrect");
        }


        const token = sign({username}, "2b90454a2e7013a137d5c2b061575cdc86a994bd", {
            subject: client?.id,
            expiresIn: "1d"
        });

        return token;

    }   
}