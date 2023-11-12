export type User = {
    name: string;
    email: string;
    password: string;
    operator: boolean;
};

export type UserResponse = {
    user: User | undefined,
    id: string
}