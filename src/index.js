import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

const Index = () => <div>This is just the test div again</div>


render(<Provider store={store}>
  <Index/>
  </Provider>, document.getElementById('root'));
