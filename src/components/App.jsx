import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import '../styles/components/App.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact="/" component={Home} />
      <Route exact="/checkout" component={Checkout} />
      <Route exact="/checkout/information" component={Information} />
      <Route exact="/checkout/payment" component={Payment} />
      <Route exact="/checkout/success" component={Success} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
