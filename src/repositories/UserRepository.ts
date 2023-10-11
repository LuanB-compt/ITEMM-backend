import { DocumentSnapshot } from "firebase-admin/firestore";
import { db } from "../database/firebase";
import { User } from "../models/User";
import { documentConverter } from "../utils/DocumentConverter";

export class UserRepository{
    constructor () {}

    private checkDoc(doc: DocumentSnapshot<User>): User | undefined {
        if (doc == undefined){return undefined}
        else {return doc.data()};
    }

    public async findUserById(id: string): Promise<User | undefined>{
        const user = db.collection('User').doc(id).withConverter(documentConverter<User>());
        const doc = await user.get();
        return this.checkDoc(doc);
    }
}
