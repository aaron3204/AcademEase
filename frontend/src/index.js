import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Toaster} from 'react-hot-toast'
import {BrowserRouter} from 'react-router-dom'
import rootReducer from './reducer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../reducer';

const store=configureStore({
  reducer:rootReducer,
})

// const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter>
  <App/>
    <Toaster />
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
  
 
);

