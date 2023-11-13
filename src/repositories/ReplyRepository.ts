import { DocumentSnapshot } from "firebase-admin/firestore";
import { db } from "../database/firebase";
import { Reply, ReplyReponse } from "../models/Reply";
import { documentConverter } from "../utils/DocumentConverter";

export class ReplyRepository {
    constructor() {}

    private checkDoc(doc: DocumentSnapshot<Reply>): ReplyReponse | undefined {
        if (doc == undefined){return undefined}
        else {return {"reply":doc.data(), "id": doc.id}};
    }

    public async createReply(newReply: Reply): Promise<ReplyReponse | undefined>{
        const result = (await db.collection('Reply').add(newReply)).withConverter(documentConverter<Reply>());
        result.set(newReply);
        const doc = await result.get();
        return this.checkDoc(doc);
    }
}