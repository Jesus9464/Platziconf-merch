import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import '../styles/components/App.scss';
import { Layaut } from '../components/Layaut';
import { Information } from '../containers/Information';

const App = () => {
  return (
    <BrowserRouter>
      <Layaut>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkout/payment" component={Payment} />
          <Route exact path="/checkout/success" component={Success} />
          <Route exact path="/checkout/information" component={Information} />
          <Route component={NotFound} />
        </Switch>
      </Layaut>
    </BrowserRouter>
  );
};

export default App;
