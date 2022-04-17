import { Container, Field, InputField, TitleField } from "./styles";

export const CompanyFilter = () => {
    return (
        <Container>
            <Field>
                <TitleField>Busque por Empresa:</TitleField>
                <InputField type="text" value={''} />
            </Field>
        </Container>
    );
}