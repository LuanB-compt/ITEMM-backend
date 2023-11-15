export type Call = {
    subject: string;
    status: boolean;
    description: string;
    departament: string;
    userID: string;
}

export type CallReponse = {
    call: Call | undefined,
    id: string
}