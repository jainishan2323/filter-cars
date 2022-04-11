import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LOGO_URL } from 'constants/app';

const HeaderWrapper = styled.header`
    padding: 0 ${props => props.theme.spacing.large};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.background};
`;

const LogoWrapper = styled.div`
    background-image: url(${LOGO_URL});
    background-repeat: no-repeat;
    background-size: contain;
    width: 200px;
    height: 40px;
`;

const LinkWrapper = styled.div`
    display: flex;
    .header-nav {
        margin: ${props => props.theme.spacing.large};
        text-decoration:  none;
        color: ${props => props.theme.colors.text};
        font-size: ${props => props.theme.fontSize['14px']};
    }
`;

const AppHeader = () => (
    <HeaderWrapper>
        <Link to={'/'}><LogoWrapper /></Link>
        <LinkWrapper>
            <Link className='header-nav' to="/unknown">Purchase</Link>
            <Link className='header-nav' to="/unknown">My Orders</Link>
            <Link className='header-nav' to="/unknown">Sell</Link>
        </LinkWrapper>
    </HeaderWrapper>
)

export default AppHeader;
