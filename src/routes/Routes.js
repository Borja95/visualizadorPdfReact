import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../pages/App';
import Pdf from '../pages/Pdf';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/pdf" component={Pdf}/>

      </Switch>

    </BrowserRouter>
  );
}

export default Routes;
