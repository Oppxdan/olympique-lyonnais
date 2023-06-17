import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../pages/about/about';

const Routes = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default Routes;