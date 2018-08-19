import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components

import App from './App';
import HomeIndex from './Views/Home'
import UserIndex from './Views/User';
import UserCreate from './Views/User/create';
import UserUpdate from './Views/User/update';
import Page404 from './Views/Pages/page404';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/user" component={UserIndex} />
            <Route exact path="/user/create" component={UserCreate} />
            <Route exact path="/user/update/:id" component={UserCreate} />
            <Route exact path="/" component={HomeIndex} />
            <Route component={Page404} />
        </Switch>
    </App>;


export default AppRoutes;

