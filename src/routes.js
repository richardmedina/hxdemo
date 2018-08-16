import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components

import App from './App';
import HomeIndex from './Views/Home'
import UserIndex from './Views/User';
import UserNew from './Views/User/New';
import Page404 from './Views/Pages/Page404';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/user" component={UserIndex} />
            <Route exact path="/user/new" component={UserNew} />
            <Route exact path="/" component={HomeIndex} />
            <Route component={Page404} />
        </Switch>
    </App>;


export default AppRoutes;

