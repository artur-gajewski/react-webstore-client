import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import Index from './containers/index';
import Shop from './containers/shop';
import Checkout from './containers/checkout';
import Store from './store';

const storeInstance = Store();

const history = syncHistoryWithStore(browserHistory, storeInstance)

ReactDOM.render(
    <Provider store={storeInstance}>
        <Router history={history}>
            <Route path="/" component={Index}>
                <IndexRoute component={Shop}/>
                <Route path="checkout" component={Checkout} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
