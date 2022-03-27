import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/login'
import Orders from './component/TabContent/tabs/orders'
import Users from './component/TabContent/tabs/users'
import Products from './component/TabContent/tabs/products'
import Sales from './component/TabContent/tabs/sales'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/orders' element={<Orders />}/>
          <Route path='/users' element={<Users />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/sales' element={<Sales />}/>
        </Route>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
