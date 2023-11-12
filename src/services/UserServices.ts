import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";

export class UserService{
    private readonly userRepository: UserRepository = new UserRepository();

    constructor () {}

    public async getUserById(id: string): Promise<User | undefined> {
        return this.userRepository.findUserById(id);
    }

    public async postCreateUser(newUser: User): Promise<User | undefined> {
        return this.userRepository.createUser(newUser);
    }

    public async postUpdateUserById(id: string, data: any): Promise<User | undefined>{
        return this.userRepository.updateUserById(id, data);
    }
}
