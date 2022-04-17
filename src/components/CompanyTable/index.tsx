import { Container } from './styles'
import { DateFormat } from '../../helpers/DateFormat'
import { useCompanies } from '../../hooks/useCompanies'
import { NewCompanyModal } from '../NewCompanyModal'

export const CompanyTable = () => {

    const {
        companies,
        isNewCompanyModalOpen,
        handleOpenNewCompanyModal,
        handleCloseNewCompanyModal
    } = useCompanies()

    return (
        <Container>
            <h1>Empresas<button type="button" onClick={handleOpenNewCompanyModal}>+</button></h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome Fantasia</th>
                        <th>Estado</th>
                        <th>CNPJ</th>
                        <th>Data</th>
                        <th>FORNECEDORES</th>
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
                                    <button type="button" onClick={() => alert('Em Construção...')}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.75 4.5C4.68782 4.5 3 6.18782 3 8.25C3 9.38674 3.53023 10.3967 4.33594 11.0859C2.65852 11.9656 1.5 13.7366 1.5 15.75H3C3 13.6841 4.68409 12 6.75 12C7.78736 12 8.62496 12.3568 9.28125 13.0078C9.10664 13.3873 9 13.8074 9 14.25C9 15.0857 9.35645 15.837 9.91406 16.3828C8.91597 17.0592 8.25 18.2131 8.25 19.5H9.75C9.75 18.2591 10.7591 17.25 12 17.25C13.2409 17.25 14.25 18.2591 14.25 19.5H15.75C15.75 18.2131 15.084 17.0592 14.0859 16.3828C14.6436 15.837 15 15.0857 15 14.25C15 13.8074 14.8934 13.3873 14.7188 13.0078C15.375 12.3568 16.2126 12 17.25 12C19.3159 12 21 13.6841 21 15.75H22.5C22.5 13.7366 21.3415 11.9656 19.6641 11.0859C20.4698 10.3967 21 9.38674 21 8.25C21 6.18782 19.3122 4.5 17.25 4.5C15.1878 4.5 13.5 6.18782 13.5 8.25C13.5 9.38674 14.0302 10.3967 14.8359 11.0859C14.4507 11.2895 14.1025 11.5625 13.7812 11.8594C13.2796 11.4823 12.6711 11.25 12 11.25C11.3289 11.25 10.7204 11.4823 10.2188 11.8594C9.89752 11.5625 9.54933 11.2895 9.16406 11.0859C9.96977 10.3967 10.5 9.38674 10.5 8.25C10.5 6.18782 8.81218 4.5 6.75 4.5ZM6.75 6C8.00152 6 9 6.99848 9 8.25C9 9.50152 8.00152 10.5 6.75 10.5C5.49848 10.5 4.5 9.50152 4.5 8.25C4.5 6.99848 5.49848 6 6.75 6ZM17.25 6C18.5015 6 19.5 6.99848 19.5 8.25C19.5 9.50152 18.5015 10.5 17.25 10.5C15.9985 10.5 15 9.50152 15 8.25C15 6.99848 15.9985 6 17.25 6ZM12 12.75C12.8373 12.75 13.5 13.4127 13.5 14.25C13.5 15.0873 12.8373 15.75 12 15.75C11.1627 15.75 10.5 15.0873 10.5 14.25C10.5 13.4127 11.1627 12.75 12 12.75Z" fill="#FBFBFB" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <NewCompanyModal isOpen={isNewCompanyModalOpen} onRequestClose={handleCloseNewCompanyModal} />
        </Container >
    );
}