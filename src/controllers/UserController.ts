import { Request, Response, Router } from "express";
import { User } from "../models/User";
import { UserService } from "../services/UserServices";

export class UserController{
    public path: string = "/user";
    public router: Router = Router();
    private readonly userService: UserService = new UserService();

    constructor () {
        this.initRoutes();
    }

    private initRoutes(){
        this.router.get(this.path + '/:id', this.getUserById.bind(this));
    }

    public async getUserById(req: Request, res: Response){
        const user = await this.userService.getUserById(req.params.id);
        if (user == undefined) {
            res.status(400).send({});
        }
        else {
            res.status(200).send(user); 
        };
    }
}