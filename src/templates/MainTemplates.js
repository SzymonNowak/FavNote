import React from 'react';
import GlobalStyle from '../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/maintheme';
import PropTypes from 'prop-types';

const MainTemplete = ({children}) => (
  <div className="App">
    <GlobalStyle/>
    <ThemeProvider>
    {children}
    </ThemeProvider>
  </div>
);

MainTemplete.propTypes = {
    children: PropTypes.elementl.isRequied,
};

export default MainTemplete;
