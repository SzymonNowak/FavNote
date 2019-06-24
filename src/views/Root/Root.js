import React from 'react';
import MainTemplate from '../../templates/MainTemplates';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Notes from '../Notes';
import Articles from '../Articles';
import Twitters from '../Twitters';
import DeatilsPage from '../DetailsPage';
import { routes } from '../../routes/index';
import { Provider } from 'react-redux';
import store from '../../store/index';
const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
          <Switch>
            <Route  exact path={routes.home} render={() => <Redirect to="/notes" /> }/>
            <Route  exact path={routes.notes} component={Notes}/>
            <Route  path={routes.note} component={DeatilsPage}/>

            <Route  exact path={routes.articles} component={Articles}/>
            <Route   path={routes.article} component={DeatilsPage}/>

            <Route  exact path={routes.twitters} component={Twitters}/>
            <Route   path={routes.twitter} component={DeatilsPage}/>

          </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider> 
);

export default Root;
