import React from 'react';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Clientes from '../src/pages/Clientes';
import NovoCliente from '../src/pages/NovoCliente';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

class App extends React.Component {
  render() {
    return(
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/clientes'>
              <Clientes />
            </Route>
            <Route path='/novocliente'>
              <NovoCliente />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
