import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { useCompanies } from '../../hooks/useCompanies'
import { CompanyInput } from '../../types/Company'
import { ModalMessage } from '../ModalMessage'
import CloseSVG from './../../assets/close.svg'
import { Container } from './styles'

type NewCompanyModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewCompanyModal = ({ isOpen, onRequestClose }: NewCompanyModalProps) => {

    const [companyFantasyName, setCompanyFantasyName] = useState('')
    const [companyUF, setCompanyUF] = useState('')
    const [companyCNPJ, setCompanyCNPJ] = useState('')
    const { createCompany } = useCompanies()

    const handleCreateNewCompany = async (event: FormEvent) => {

        event.preventDefault()

        const newCompany: CompanyInput = {
            fantasyName: companyFantasyName,
            uf: companyUF,
            cnpj: companyCNPJ
        }

        await createCompany(newCompany);

        clearInputs()
        onRequestClose()

    }

    const clearInputs = () => {
        setCompanyFantasyName('')
        setCompanyUF('')
        setCompanyCNPJ('')
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <ModalMessage />
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close">

                <img src={CloseSVG} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewCompany}>
                <h2>Cadastrar Empresa</h2>

                <input
                    placeholder="Nome Fantasia"
                    value={companyFantasyName}
                    onChange={event => setCompanyFantasyName(event.target.value)}
                />
                <input
                    placeholder="Estado"
                    value={companyUF}
                    onChange={event => setCompanyUF(event.target.value)}
                />
                <input
                    placeholder="CNPJ"
                    value={companyCNPJ}
                    onChange={event => setCompanyCNPJ(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}