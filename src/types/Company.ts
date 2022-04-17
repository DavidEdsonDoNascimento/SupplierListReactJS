export type Company = {
    id: number;
    fantasyName: string;
    uf: string;
    cnpj: string;
    createdAt: Date;
}

export type CompanyInput = Omit<Company, 'id' | 'createdAt'>
