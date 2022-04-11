import React from 'react';
import AppRoutes from 'routes';
import { ThemeProvider } from "styled-components";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { GlobalStyles, theme } from 'global.styles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <GlobalStyles />
            <AppRoutes />
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
