import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    padding: ${props => props.theme.spacing.small};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${props => props.theme.colors.background};
`;

const AppFooter = () => (
    <FooterWrapper>
        <p>© Ishan Jain 2022</p>
    </FooterWrapper>
)

export default AppFooter;
