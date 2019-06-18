import React from 'react';
import Button from '../../components/atoms/Button/Button';
import MainTemplate from '../../templates/MainTemplates';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notes from '../Notes';
import Articles from '../Articles';
import Twitters from '../Twitters';


const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route  exact path="/" component={Notes}/>
        <Route  exact path="/articles" component={Articles}/>
        <Route  exact path="/twitters" component={Twitters}/>
      </Switch>

    

    </BrowserRouter>
  </MainTemplate>
);

export default Root;
