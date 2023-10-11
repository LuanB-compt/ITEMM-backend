import { db } from "../database/firebase";
import { User } from "../models/User";
import { documentConverter } from "../utils/DocumentConverter";

export class UserRepository{
    constructor () {}

    private checkDoc(doc: FirebaseFirestore.QuerySnapshot<User>): User | undefined {
        if (doc.docs[0] == undefined){return undefined}
        else {return doc.docs[0].data()};
    }

    public async findUserById(id: string): Promise<User | undefined>{
        const user = db.collection('User').where("id", "==", id).withConverter(documentConverter<User>());
        const doc = await user.get();
        return this.checkDoc(doc);
    }
}
