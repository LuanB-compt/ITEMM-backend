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
        this.router.post(this.path, this.postCreateUser.bind(this));
        this.router.post(this.path + '/:id', this.postUpdateUserById.bind(this));
        this.router.get(this.path + '/:id', this.getUserById.bind(this));
    }

    public async postCreateUser(req: Request, res: Response){
        const {name, email, password, operator} = req.body;
        const newUser: User = {name, email, password, operator}
        const response = await this.userService.postCreateUser(newUser);
        if (response == undefined) {
            res.status(400).send({message:"Error"});
        }
        else {
            res.status(200).send(response);
        }
    }

    public async postUpdateUserById(req: Request, res: Response){
        const user = await this.userService.postUpdateUserById(req.params.id, req.body);
        if (user == undefined) {
            res.status(400).send({message:"Error"});
        }
        else {
            res.status(200).send(user); 
        }; 
    }

    public async getUserById(req: Request, res: Response){
        const user = await this.userService.getUserById(req.params.id);
        if (user == undefined) {
            res.status(400).send({message:"Error"});
        }
        else {
            res.status(200).send(user); 
        };
    }
}