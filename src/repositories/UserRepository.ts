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

    public async createUser(newUser: User): Promise<User | undefined>{
        //const result = await (await db.collection('User').add(newUser)).set(newUser);
        const result = (await db.collection('User').add(newUser)).withConverter(documentConverter<User>());
        result.set(newUser);
        const doc = await result.get()
        return this.checkDoc(doc);
    }

    public async findUserById(id: string): Promise<User | undefined>{
        const user = db.collection('User').doc(id).withConverter(documentConverter<User>());
        const doc = await user.get();
        return this.checkDoc(doc);
    }

    public async updateUserById(id: string, data: any): Promise<User | undefined>{
        const user = db.collection('User').doc(id).withConverter(documentConverter<User>());
        user.update({
            name: "test2",
            email: "lalalala",
            password: "updated",
            operator: false
        })
        .catch((err) => {
            console.log("error update");
            console.log(err);
            return undefined;
        })
        .finally(async () => {
            const doc = await user.get();
            return this.checkDoc(doc);
        });
        return undefined;
    }
}
