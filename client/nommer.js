import React from 'react';
import { render } from 'react-dom';

// Import CSS
import Style from './styles/app.scss';

// Import Components
import App from './components/App';
import ListNoms from './components/ListNoms';
import Nom from './components/Nom/Nom';

// Import Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={ListNoms}></IndexRoute>
                <Route path="/n/:nomId" component={Nom}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));