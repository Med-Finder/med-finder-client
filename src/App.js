import React, {Component} from 'react';
import FirstPage from './components/firstPage';
import {Provider} from 'react-redux';
import store from './store';
// import request from './services/request'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FirstPage />
      </Provider>
    );
  }
}
