import styled from 'styled-components';

export const ImageWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 300px;
    height: 300px;
    background: ${props => props.theme.colors.background};
    img {
        width: 150px;
    }
`;

export const DetailsWrapper = styled.section`
    width: 800px;
    display: grid;
    grid-template-columns: 450px auto;
    grid-gap: ${props => props.theme.spacing.large};
    margin: ${props => props.theme.spacing.large} auto;
    h3 {
        margin: ${props => props.theme.spacing.large} 0;
    }
`;

export const SaveControl = styled.div`
    border: 1px solid ${props => props.theme.colors.background};
    padding: ${props => props.theme.spacing.large};
    height: fit-content;
`;
