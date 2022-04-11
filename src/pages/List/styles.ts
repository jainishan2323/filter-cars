import styled from 'styled-components';

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: ${props => props.theme.spacing.large};
    max-width: 1280px;
    margin: ${props => props.theme.spacing.large} auto;
`;

export const FilterWrapper = styled.div`
    padding: ${props => props.theme.spacing.large};
    border: 1px solid ${props => props.theme.colors.background};
    width: 300px;
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: ${props => props.theme.spacing.large};
    height: fit-content;
`;

export const ListWrapper = styled.section`
    margin-top: ${props => props.theme.spacing.large};
    min-width: 600px;
`;

export const ListItemWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: ${props => props.theme.spacing.medium};
    border: 1px solid ${props => props.theme.colors.background};
    margin-bottom: ${props => props.theme.spacing.medium};
    min-width: 600px;
    .img {
        width: 72px;
        height: 60px;
    }
    .content {
        margin-left: ${props => props.theme.spacing.large};
    }
`;

export const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;