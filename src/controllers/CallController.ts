import { CallService } from "../services/CallServices";
import { Call } from "../models/Call";
import { Request, Response, Router } from "express";

export class CallController{
    public path: string = "/call";
    public router: Router = Router();
    private readonly callService: CallService = new CallService();

    constructor () {
        this.initRoutes();
    }

    private initRoutes(){
        this.router.post(this.path, this.postCreateCall.bind(this));
        this.router.post(this.path + '/:id', this.postUpdateCallById.bind(this));
        this.router.get(this.path + '/:id', this.getCallById.bind(this));
        this.router.get(this.path + 's/:id', this.getUserCalls.bind(this));
        this.router.get(this.path + 's/:status', this.getCallByStatus.bind(this));
        this.router.post(this.path + '/delete/:id', this.postDeleteCallById.bind(this));
    }

    public async postCreateCall(req: Request, res: Response){
        const {subject, status, description, departament, userID} = req.body;
        const newCall: Call = {subject, status, description, departament, userID}
        const response = await this.callService.postCreateCall(newCall);
        if (response == undefined) {
            res.status(400).send({message:"Error"});
        }
        else {
            res.status(200).send(response);
        }
    }

    public async postUpdateCallById(req: Request, res: Response){
        const call = await this.callService.postUpdateCallById(req.params.id, req.body);
        if (call == undefined) {
            res.status(400).send({message:"Error"});
        }
        else {
            res.status(200).send(call); 
        }; 
    }

    public async getCallById(req: Request, res: Response){
        const call = await this.callService.getCallById(req.params.id);
        if (call == undefined) {
            res.status(400).send({message:"Error"});
        }
        else {
            res.status(200).send(call); 
        };
    }

    public async getUserCalls(req: Request, res: Response){
        const calls = await this.callService.getUserCalls(req.params.id);
        if (calls == undefined) {
            res.status(400).send({message:"Error"});
        }
        else {
            res.status(200).send(calls); 
        };
    }

    public async getCallByStatus(req: Request, res: Response){
        const calls = await this.callService.getCallByStatus(Boolean(req.params.status));
        if (calls == undefined) {
            res.status(400).send({message:"Error"});
        }
        else {
            res.status(200).send(calls); 
        };
    }

    public async postDeleteCallById(req: Request, res: Response){
        const call = await this.callService.postDeleteCallById(req.params.id);
        if (call == undefined) {
            res.status(400).send({message:"Error"});
        }
        else {
            res.status(200).send(call); 
        }; 
    }
}