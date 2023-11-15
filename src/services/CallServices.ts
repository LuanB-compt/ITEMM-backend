import { CallRepository } from "../repositories/CallRepository";
import { Call, CallReponse } from "../models/Call";
import departaments from "../models/Departaments.json";

export class CallService{
    private readonly callRepository: CallRepository = new CallRepository();

    constructor() {}

    public async getCallById(id: string): Promise<CallReponse | undefined> {
        return this.callRepository.findCallById(id);
    }

    public async getUserCalls(userID: string): Promise<Call[] | undefined> {
        return this.callRepository.findUserCalls(userID);
    }

    public async postCreateCall(newCall: Call): Promise<CallReponse | undefined> {
        const {departament} = newCall;
        if (departaments["Departamentos"].includes(departament)){
            return this.callRepository.createCall(newCall);
        }
        return undefined ;
    }

    public async postUpdateCallById(id: string, data: any): Promise<CallReponse | undefined>{
        return this.callRepository.updateCallById(id, data);
    }

    public async postDeleteCallById(id: string): Promise<CallReponse | undefined>{
        return this.callRepository.deleteCallById(id);
    }
}