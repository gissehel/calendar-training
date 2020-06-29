import ReactReduxInit from './init/reactRedux';
import initView from './init/view';
import initRedux from './init/redux';

import actions from './actions';
import reducer from './reducers/app';
import Routes from './views/routes/index';
import configDao from './dao/config';

import * as question from './actions/question';

import DebugService from './service/debug';

Object.assign(actions, { question });
const reactReduxInit = new ReactReduxInit(initView, initRedux);

let x = document.getElementsByTagName('body')[0].children[0];
reactReduxInit.rootElement = x;
reactReduxInit.baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
reactReduxInit.reducer = reducer;
reactReduxInit.routes = Routes;

[
    DebugService, 
].map( (serviceClass) => new serviceClass(reactReduxInit) );

reactReduxInit.init();

if (module.hot) {
    module.hot.accept();
}

window.config = configDao.config;
