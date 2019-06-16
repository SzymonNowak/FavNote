import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import GlobalStyle from '../../theme/GlobalStyle';



const Root = () => (
  <div className="App">
    <GlobalStyle/>
    <Button width=""> Close/Save</Button>
    <Button secondary >Remove</Button>

  </div>
);

export default Root;
