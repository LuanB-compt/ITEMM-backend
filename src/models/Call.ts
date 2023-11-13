export type Call = {
    subject: string;
    status: boolean;
    description: string;
    departament: string;
}

export type CallReponse = {
    reply: Call | undefined,
    id: string
}