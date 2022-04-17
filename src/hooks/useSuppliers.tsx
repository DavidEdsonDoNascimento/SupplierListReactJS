import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import { Supplier, SupplierInput } from '../types/Supplier'

type SuppliersProviderProps = {
    children: ReactNode
}

type SupplierContextProps = {
    suppliers: Supplier[];
    isNewSupplierModalOpen: boolean;
    createSupplier: (supplier: SupplierInput) => Promise<void>;
    handleOpenNewSupplierModal: () => void;
    handleCloseNewSupplierModal: () => void;
}

const SuppliersContexts = createContext<SupplierContextProps>({} as SupplierContextProps)

export const SuppliersProvider = ({ children }: SuppliersProviderProps) => {

    const [suppliers, setSuppliers] = useState<Supplier[]>([])

    async function loadAllSuppliers() {
        const result = await api('suppliers')
        setSuppliers(result.data.suppliers)
    }

    const createSupplier = async (supplierInput: SupplierInput) => {
        const result = await api.post('/suppliers', { ...supplierInput, createdAt: new Date() });
        const { supplier } = result.data;
        setSuppliers([...suppliers, supplier]);
    }

    const [isNewSupplierModalOpen, setIsNewSupplierModalOpen] = useState(false)

    const handleOpenNewSupplierModal = () => {
        setIsNewSupplierModalOpen(true)
    }
    const handleCloseNewSupplierModal = () => {
        setIsNewSupplierModalOpen(false)
    }

    useEffect(() => {
        loadAllSuppliers()
    }, [])

    return (
        <SuppliersContexts.Provider value={{
            isNewSupplierModalOpen,
            suppliers,
            createSupplier,
            handleOpenNewSupplierModal,
            handleCloseNewSupplierModal
        }}>
            {children}
        </SuppliersContexts.Provider>
    )
}

export const useSuppliers = () => {
    const context = useContext(SuppliersContexts);
    return context;
}