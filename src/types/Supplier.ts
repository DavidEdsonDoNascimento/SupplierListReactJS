export type Supplier = {
    id: number;
    name: string;
    phone: string;
    document: string;
    companyId: number;
    createdAt: Date;
    isNaturalPerson: boolean;
    rg?: string;
    dateOfBirth?: Date | null;
}

export type SupplierInput = Omit<Supplier, 'id' | 'createdAt'>
