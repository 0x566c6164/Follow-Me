import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from './Utils/store';
import './index.css';
import App from './App';
import Notifier from './Components/General/Notifier';

const app = (
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
      <App />
      <Notifier />
    </SnackbarProvider>
  </Provider>
);

render(app, document.getElementById('root'))