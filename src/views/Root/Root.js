import React from 'react';
import MainTemplate from '../../templates/MainTemplates';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notes from '../Notes';
import Articles from '../Articles';
import Twitters from '../Twitters';


const Root = () => (
  <BrowserRouter>
    <MainTemplate>
        <Switch>
          <Route  exact path="/" component={Notes}/>
          <Route  exact path="/articles" component={Articles}/>
          <Route  exact path="/twitters" component={Twitters}/>
        </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
