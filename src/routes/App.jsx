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
import { AppContext } from '../Context/AppContex';
import useInitialState from '../Hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
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
    </AppContext.Provider>
  );
};

export default App;
