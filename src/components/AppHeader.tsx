import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
    padding: 0 ${props => props.theme.spacing.large};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.background};
`;

const LogoWrapper = styled.div`
    background-image: url('https://auto1-js-task-api--mufasa71.repl.co/images/logo.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 200px;
    height: 40px;
`;

const LinkWrapper = styled.div`
    margin: ${props => props.theme.spacing.small};
    display: flex;
    .header-nav {
        padding: ${props => props.theme.spacing.small};
    }
`;

const AppHeader = () => (
    <HeaderWrapper>
        <Link to={'/'}><LogoWrapper /></Link>
        <LinkWrapper>
            <Link className='header-nav' to="/unknown">Purchase</Link>
            <Link className='header-nav' to="/unknown">My Order</Link>
            <Link className='header-nav' to="/unknown">Sell</Link>
        </LinkWrapper>
    </HeaderWrapper>
)

export default AppHeader;
