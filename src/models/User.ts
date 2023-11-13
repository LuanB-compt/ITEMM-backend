export type User = {
    name: string;
    email: string;
    password: string;
    operator: boolean;
};

export type UserResponse = {
    name: string | undefined;
    email: string | undefined;
    id: string | undefined;
    operator: boolean | undefined;
}