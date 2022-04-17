import { CompanyInput } from '../../types/Company';
import { Container } from './styles'

type CompanyValid = {
    isValid: boolean;
    invalidEntries: string[]
}

export const ModalMessage = () => {

    const isCompanyValid = (company: CompanyInput) => {

        const companyValid: CompanyValid = {
            isValid: true,
            invalidEntries: []
        }

        if (!company?.fantasyName) {
            companyValid.invalidEntries.push('Nome Fantasia')
        }

        if (!company?.uf) {
            companyValid.invalidEntries.push('Estado')
        }

        if (!company?.cnpj) {
            companyValid.invalidEntries.push('CNPJ')
        }

        companyValid.isValid = !companyValid.invalidEntries.length;

        return companyValid;
    }

    return (<Container></Container>)
}
