import Modal from 'react-modal'
import CloseSVG from './../../assets/close.svg'
import IncomeSVG from './../../assets/income.svg'
import OutcomeSVG from './../../assets/income.svg'
import { FormEvent, useState } from 'react'
import { useSuppliers } from '../../hooks/useSuppliers'
import { SupplierInput } from '../../types/Supplier'
import { ModalMessage } from '../ModalMessage'
import { Container, RadioBox, SupplierTypeContainer } from './styles'
import { toast } from 'react-toastify'

type NewSupplierModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewSupplierModal = ({ isOpen, onRequestClose }: NewSupplierModalProps) => {

    const [supplierCompanyId, setCompanyId] = useState('')
    const [supplierName, setSupplierName] = useState('')
    const [supplierPhone, setSupplierPhone] = useState('')
    const [supplierDocument, setSupplierDocument] = useState('')
    const [supplierRG, setSupplierRG] = useState('')
    const [supplierDateOfBirth, setSupplierDateOfBirth] = useState<Date | null>(null)
    const [isNaturalPerson, setNaturalPerson] = useState(false)
    const { createSupplier } = useSuppliers()

    const handleCreateNewSupplier = async (event: FormEvent) => {

        event.preventDefault()

        if (isNaturalPerson) {

            if (supplierRG.length !== 7) {
                toast.error('RG fornecido é invalido.');
                return;
            }

            if (supplierDocument.length !== 11) {
                toast.error('CPF fornecido é invalido.');
                return;
            }
        } else {

            if (supplierDocument.length !== 14) {
                toast.error('CNPJ fornecido é invalido.');
                return;
            }
        }

        const newSupplier: SupplierInput = {
            name: supplierName,
            phone: supplierPhone,
            document: supplierDocument,
            isNaturalPerson: isNaturalPerson,
            rg: supplierRG,
            dateOfBirth: supplierDateOfBirth || null,
            companyId: +supplierCompanyId,
        }

        await createSupplier(newSupplier);

        clearInputs()
        onRequestClose()

    }

    const clearInputs = () => {
        setCompanyId('')
        setSupplierName('')
        setSupplierPhone('')
        setSupplierDocument('')
        setSupplierRG('')
        setSupplierDateOfBirth(null)
        setNaturalPerson(false)
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

            <Container onSubmit={handleCreateNewSupplier}>
                <h2>Cadastrar Fornecedor</h2>

                <input
                    placeholder="Nome"
                    value={supplierName}
                    onChange={event => setSupplierName(event.target.value)}
                />
                <input
                    placeholder="Telefone"
                    value={supplierPhone}
                    onChange={event => setSupplierPhone(event.target.value)}
                />
                <SupplierTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setNaturalPerson(true) }}
                        isActive={isNaturalPerson}
                        activeColor="green"
                    >
                        <img src={IncomeSVG} alt="entrada" />
                        <span>Pessoa Fisica</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => { setNaturalPerson(false) }}
                        isActive={!isNaturalPerson}
                        activeColor="blue"
                    >
                        <img src={OutcomeSVG} alt="saida" />
                        <span>Pessoa Juridica</span>
                    </RadioBox>
                </SupplierTypeContainer>
                <input
                    placeholder={isNaturalPerson ? "CPF" : "CNPJ"}
                    value={supplierDocument}
                    onChange={event => setSupplierDocument(event.target.value)}
                />
                {isNaturalPerson &&
                    <>
                        <input
                            placeholder="RG"
                            value={supplierRG}
                            onChange={event => setSupplierRG(event.target.value)}
                        />
                        <input
                            type="date"
                            placeholder="Data de Nascimento"
                            value={supplierDateOfBirth?.toISOString().slice(0, 10)}
                            onChange={event => setSupplierDateOfBirth(new Date(event.target.value))}
                        />
                    </>
                }

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}