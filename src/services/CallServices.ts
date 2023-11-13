import { CallRepository } from "../repositories/CallRepository";
import { Call, CallReponse } from "../models/Call";

export class CallService{
    private readonly callRepository: CallRepository = new CallRepository();

    constructor() {}

    public async getCallById(id: string): Promise<CallReponse | undefined> {
        return this.callRepository.findCallById(id);
    }

    public async postCreateCall(newCall: Call): Promise<CallReponse | undefined> {
        return this.callRepository.createCall(newCall);
    }

    public async postUpdateCallById(id: string, data: any): Promise<CallReponse | undefined>{
        return this.callRepository.updateCallById(id, data);
    }

    public async postDeleteCallById(id: string): Promise<CallReponse | undefined>{
        return this.callRepository.deleteCallById(id);
    }
}