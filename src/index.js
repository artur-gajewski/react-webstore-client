import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import Shop from './containers/shop';
import Store from './store';

const storeInstance = Store();

const history = syncHistoryWithStore(browserHistory, storeInstance)

ReactDOM.render(
    <Provider store={storeInstance}>
        <Router history={history}>
            <Route path="/" component={Shop}>
                <Route path="checkout" component={Shop}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
