import { Container } from './styles'
import { DateFormat } from '../../helpers/DateFormat'
import { useSuppliers } from '../../hooks/useSuppliers'
import { NewSupplierModal } from '../NewSupplierModal'

export const SupplierTable = () => {

    const {
        suppliers,
        isNewSupplierModalOpen,
        handleOpenNewSupplierModal,
        handleCloseNewSupplierModal
    } = useSuppliers()

    return (
        <Container>
            <h1>Fornecedores<button type="button" onClick={handleOpenNewSupplierModal}>+</button></h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CNPJ/CPF</th>
                        <th>Contato</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.document}</td>
                                <td>{item.phone || ''}</td>
                                <td>{DateFormat.toBrazilian(item.createdAt)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <NewSupplierModal isOpen={isNewSupplierModalOpen} onRequestClose={handleCloseNewSupplierModal} />
        </Container>
    );
}