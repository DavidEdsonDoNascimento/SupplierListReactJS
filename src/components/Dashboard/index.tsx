import { CompaniesProvider } from '../../hooks/useCompanies';
import { SuppliersProvider } from '../../hooks/useSuppliers';
import { CompanyTable } from '../CompanyTable';
import { SupplierTable } from '../SupplierTable';
import { Container } from './styles'

type DashboardProps = {
    listType: number;
}

export const Dashboard = ({ listType }: DashboardProps) => {
    return (
        <Container>
            {listType === 1 && <CompaniesProvider><CompanyTable /></CompaniesProvider>}
            {listType !== 1 && <SuppliersProvider><SupplierTable /></SuppliersProvider>}
        </Container>
    );
}