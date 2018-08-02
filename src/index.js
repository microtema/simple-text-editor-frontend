import React from 'react';
import {render} from 'react-dom';
import 'raf/polyfill'; //React also depends on requestAnimationFrame (even in test environments). raf package is to shim requestAnimationFrame
import root from 'window-or-global'; //Use this module to get the global object both on server and client side. No more window is not defined errors
import {applyMiddleware, createStore} from 'redux';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import reducers from './main/reducers/index';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import 'bootstrap-css-only/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import 'ie-array-find-polyfill';
//Polyfill to provide array.find on IE
import {TextFileComponent} from './main/component/TextFile';
import {TextEditorComponent} from './main/component/TextEditor';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    reducers,
    applyMiddleware(middleware, thunk)
);

render(<Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="container-fluid">
                <Route exact path='/' component={TextFileComponent}/>
                <Route path='/editor' component={TextEditorComponent}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    root.document.getElementById('root')
);
