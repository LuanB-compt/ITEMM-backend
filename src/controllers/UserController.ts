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

    private initRoutes () {

    }
}