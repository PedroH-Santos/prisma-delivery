

import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliveryManController } from "./modules/account/authenticateDeliveryMan/AuthenticateDeliveryManController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryManController } from "./modules/deliveryman/useCases/createDeliveryMan/CreateDeliveryManController";


const routes = Router();


const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliveryManController = new CreateDeliveryManController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();


routes.post("/client/",createClientController.handle);
routes.post("/client/authenticate",authenticateClientController.handle);
routes.post("/deliveryman",createDeliveryManController.handle);
routes.post("/deliveryman/authenticate",authenticateDeliveryManController.handle);



export { routes }