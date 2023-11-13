import { ReplyRepository } from "../repositories/ReplyRepository";
import { Reply, ReplyReponse } from "../models/Reply";

export class ReplyService{
    private readonly replyRepository: ReplyRepository = new ReplyRepository();

    constructor (){}

    public async postCreateReply(newReply: Reply): Promise<ReplyReponse | undefined>{
        return this.replyRepository.createReply(newReply);
    }
}