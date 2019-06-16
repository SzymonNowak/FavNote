import React from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import GlobalStyle from '../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/maintheme';

const Root = () => (
  <div className="App">
    <GlobalStyle/>
    <ThemeProvider theme={theme}> 
      <>
          <Button width=""> Close/Save</Button>
          <Button secondary >Remove</Button>
      </>
    </ThemeProvider>
  </div>
);
