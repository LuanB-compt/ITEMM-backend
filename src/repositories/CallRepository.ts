import { DocumentSnapshot } from "firebase-admin/firestore";
import { db } from "../database/firebase";
import { Call } from "../models/Call";
import { documentConverter } from "../utils/DocumentConverter";

export class CallRepository{
    constructor() {}

    private checkDoc(doc: DocumentSnapshot<Call>): Call | undefined {
        if (doc == undefined){return undefined}
        else {return doc.data()};
    }

    public async createCall(newCall: Call): Promise<Call | undefined>{
        const result = (await db.collection('Call').add(newCall)).withConverter(documentConverter<Call>());
        result.set(newCall);
        const doc = await result.get()
        return this.checkDoc(doc);
    }

    public async findCallById(id: string): Promise<Call | undefined>{
        const call = db.collection('Call').doc(id).withConverter(documentConverter<Call>());
        const doc = await call.get();
        return this.checkDoc(doc);
    }

    public async updateCallById(id: string, data: any): Promise<Call | undefined>{
        const call = db.collection('Call').doc(id).withConverter(documentConverter<Call>());
        call.update({
            departament: "setor teste",
            description: "desc teste",
            status: true,
            subject: "teste"
        })
        .catch((err) => {
            console.log("error update");
            console.log(err);
            return undefined;
        })
        .finally(async () => {
            const doc = await call.get();
            return this.checkDoc(doc);
        });
        return undefined;
    }

    public async deleteCallById(id: string): Promise<Call | undefined>{
        const call = db.collection('Call').doc(id).withConverter(documentConverter<Call>());
        call.update({
            status: false
        })
        .catch((err) => {
            console.log("error delete");
            console.log(err);
            return undefined;
        })
        .finally(async () => {
            const doc = await call.get();
            return this.checkDoc(doc);
        });
        return undefined;
    }
}