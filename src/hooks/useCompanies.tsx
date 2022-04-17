import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import { Company, CompanyInput } from '../types/Company'

type CompaniesProviderProps = {
    children: ReactNode
}

type CompanyContextProps = {
    isNewCompanyModalOpen: boolean;
    companies: Company[];
    createCompany: (company: CompanyInput) => Promise<void>;
    handleOpenNewCompanyModal: () => void;
    handleCloseNewCompanyModal: () => void;
}

const CompaniesContexts = createContext<CompanyContextProps>({} as CompanyContextProps)

export const CompaniesProvider = ({ children }: CompaniesProviderProps) => {
    const [companies, setCompanies] = useState<Company[]>([])

    async function loadAllCompanies() {
        const result = await api('companies')
        setCompanies(result.data.companies)
    }

    const createCompany = async (companyInput: CompanyInput) => {
        const result = await api.post('/companies', { ...companyInput, createdAt: new Date() });
        const { company } = result.data;
        setCompanies([...companies, company]);
    }


    const [isNewCompanyModalOpen, setIsNewCompanyModalOpen] = useState(false)

    const handleOpenNewCompanyModal = () => {
        setIsNewCompanyModalOpen(true)
    }
    const handleCloseNewCompanyModal = () => {
        setIsNewCompanyModalOpen(false)
    }

    useEffect(() => {
        loadAllCompanies()
    }, [])

    return (
        <CompaniesContexts.Provider value={{
            isNewCompanyModalOpen,
            companies,
            createCompany,
            handleOpenNewCompanyModal,
            handleCloseNewCompanyModal
        }}>
            {children}
        </CompaniesContexts.Provider>
    )
}

export const useCompanies = () => {
    const context = useContext(CompaniesContexts);
    return context;
}