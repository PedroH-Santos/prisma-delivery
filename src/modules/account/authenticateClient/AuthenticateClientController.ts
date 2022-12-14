
import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";



class AuthenticateClientController {


    async handle(req: Request, res: Response) {

        const { username, password } = req.body;

        const authenticateClientUseCase = new AuthenticateClientUseCase();

        const result = await authenticateClientUseCase.execute({ username, password });

        res.json(result);   

    }

}

export {AuthenticateClientController }