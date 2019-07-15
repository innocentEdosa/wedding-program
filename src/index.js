import './component/asset/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './component/Home/Home';

const Index = () => <div><Home></Home></div>


render(<Provider store={store}>
  <Index/>
  </Provider>, document.getElementById('root'));
