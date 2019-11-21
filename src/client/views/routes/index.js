import React from 'react';
import { Route } from 'react-router';
import MainPage from '../containers/mainPage';
import '../main.css';

export default () => (
    <>
        <Route exact path='/' component={MainPage} />
    </>
);
