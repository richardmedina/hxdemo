import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { refreshUsers } from './ActionCreators/Users';

// Routes
import AppRoutes from './routes'

store.dispatch (refreshUsers ());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
