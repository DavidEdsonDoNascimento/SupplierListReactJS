import { Container } from './styles'
import { DateFormat } from '../../helpers/DateFormat'
import { useCompanies } from '../../hooks/useCompanies'
import { CompanyFilter } from '../CompanyFilter'
import { NewCompanyModal } from '../NewCompanyModal'

export const CompanyTable = () => {

    const { companies, isNewCompanyModalOpen, handleOpenNewCompanyModal, handleCloseNewCompanyModal } = useCompanies()

    return (
        <Container>

            <h1>Empresas<button type="button" onClick={handleOpenNewCompanyModal}>+</button></h1>

            {/* <CompanyFilter /> */}
            <table>
                <thead>
                    <tr>
                        <th>Nome Fantasia</th>
                        <th>Estado</th>
                        <th>CNPJ</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.fantasyName}</td>
                                <td>{item.uf}</td>
                                <td>{item.cnpj}</td>
                                <td>{DateFormat.toBrazilian(item.createdAt)}</td>
                                <td>
                                    <a href="#" >Fornecedores</a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <NewCompanyModal isOpen={isNewCompanyModalOpen} onRequestClose={handleCloseNewCompanyModal} />
        </Container>
    );
}