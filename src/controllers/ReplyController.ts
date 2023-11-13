import { ReplyService } from "../services/ReplyService";
import { Reply } from "../models/Reply";
import { Request, Response, Router } from "express";

export class ReplyController {
    public path: string = "/reply";
    public router: Router = Router();
    private readonly replyService: ReplyService = new ReplyService();

    constructor(){
        this.initRoutes();
    }

    private initRoutes(){
        this.router.post(this.path, this.postCreateReply.bind(this));
    }

    public async postCreateReply(req: Request, res: Response) {
        const {idCall, solution} = req.body;
        const newReply: Reply = {idCall, solution};
        const response = await this.replyService.postCreateReply(newReply);
        if (response == undefined){
            res.status(400).send({message:"Error"});
        }
        else {
            res.status(200).send(response);
        };
    }
}