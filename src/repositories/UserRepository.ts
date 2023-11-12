import { DocumentSnapshot } from "firebase-admin/firestore";
import { db } from "../database/firebase";
import { User, UserResponse } from "../models/User";
import { documentConverter } from "../utils/DocumentConverter";

export class UserRepository{
    constructor () {}

    private checkDoc(doc: DocumentSnapshot<User>): UserResponse | undefined {
        if (doc == undefined){return undefined}
        else {return {"user": doc.data(), "id":doc.id}};
    }

    public async createUser(newUser: User): Promise<UserResponse | undefined>{
        const result = (await db.collection('User').add(newUser)).withConverter(documentConverter<User>());
        result.set(newUser);
        const doc = await result.get()
        return this.checkDoc(doc);
    }

    public async findUserById(id: string): Promise<UserResponse | undefined>{
        const user = db.collection('User').doc(id).withConverter(documentConverter<User>());
        const doc = await user.get();
        return this.checkDoc(doc);
    }

    public async updateUserById(id: string, data: any): Promise<UserResponse | undefined>{
        const user = db.collection('User').doc(id).withConverter(documentConverter<User>());
        await user.update(data);
        const doc = await user.get();
        return this.checkDoc(doc);
    }
}
