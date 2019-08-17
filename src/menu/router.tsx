import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/home.component';
import PageNotFound from '../pageNotFound/page-not-found.component';


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route component={PageNotFound} />
        </Switch>
    )
}
export default Router; 