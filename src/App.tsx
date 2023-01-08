import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';
import { Audit } from './components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #171B24;
  padding-top: 50px;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#919EAB',
    },
  },
});


const App = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Audit />
    </Wrapper>
  </ThemeProvider>
);

export default App;
