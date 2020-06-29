import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

/**
 * @param {import("redux").Store<any, import("redux").AnyAction>} store
 * @param {import("history").History<{}>} history
 * @param {Element | DocumentFragment} rootElement
 * @param {()=>JSX.Element} Routes
 */
export default (store, history, rootElement, Routes) => {
    console.log('init view',{store, history, rootElement, Routes})
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </Provider>,
        rootElement
    );
}
