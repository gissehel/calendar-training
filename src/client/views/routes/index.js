import React from 'react';
import { Route } from 'react-router';
import MainPage from '../components/mainPage';
import MessageBox from '../containers/messageBox';
import '../main.css';

export default () => (
    <>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/message' component={MessageBox} />
    </>
);
