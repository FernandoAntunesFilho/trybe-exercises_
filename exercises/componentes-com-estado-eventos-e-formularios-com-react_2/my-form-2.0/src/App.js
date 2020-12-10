import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import './App.css';
import Form from './Form';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Form />
      </Provider>
    );
  }
}

export default App;
