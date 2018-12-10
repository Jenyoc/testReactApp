import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import withViewApp from '../../containers/AppWrapper';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/SideBar';
import PageSwitch from '../Main/PageSwitch';

const App = () =>
      <BrowserRouter>
        <div className="app">
            <Header />
            <Sidebar />
            <PageSwitch />
        </div>
      </BrowserRouter>;

export default withViewApp(App);
