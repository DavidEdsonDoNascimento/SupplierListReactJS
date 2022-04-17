import styled from "styled-components"

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 24rem;
    width: 100%;
    padding: 2rem;
    background: var(--blue);
`;

export const ContainerLogo = styled.span`
    margin-bottom: 4.5rem;
    font-size: 3rem;
    font-weight: 600;
    color: var(--yellow);
`

export const ContainerMenus = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`