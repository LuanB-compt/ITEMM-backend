import { UserRepository } from "../repositories/UserRepository";
import { User, UserResponse } from "../models/User";

export class UserService{
    private readonly userRepository: UserRepository = new UserRepository();

    constructor () {}

    public async getUserById(id: string): Promise<UserResponse | undefined> {
        return this.userRepository.findUserById(id);
    }

    public async postCreateUser(newUser: User): Promise<UserResponse | undefined> {
        return this.userRepository.createUser(newUser);
    }

    public async postUpdateUserById(id: string, data: any): Promise<UserResponse | undefined>{
        return this.userRepository.updateUserById(id, data);
    }
}
