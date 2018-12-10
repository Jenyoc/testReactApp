import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import DogListPage from '../../pages/DogListPage/DogListPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import BreedInfoPage from '../../pages/BreedInfoPage/BreedInfoPage';
import './PageSwitch.css';

const PageSwitch = () =>
  <main className="main">
    <Switch>
      <Route exact
             path="/contacts"
             component={ContactsPage} />
      <Route exact
             path="/breed-list"
             component={DogListPage} />
      <Route exact
             path="/"
             component={HomePage} />
      <Route exact
             path="/breed-info"
             component={BreedInfoPage} />
    </Switch>
  </main>;

export default PageSwitch;