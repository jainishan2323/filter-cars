import React from 'react';
import styled from 'styled-components';
import { Outlet } from "react-router-dom";

import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';

const AppWrapper = styled.section`
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
`;

const MainWrapper = styled.section`
`;

const AppLayout: React.FC = () => {
    return (
        <AppWrapper>
            <AppHeader />
            <Outlet />
            <AppFooter />
        </AppWrapper>
    )
}

export default AppLayout;
