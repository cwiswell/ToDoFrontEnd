import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home-component/home';
import PageNotFound from '../pageNotFound/page-not-found.component';
import ToDoForm from '../to-do-components/to-do-form';


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/todo/edit/:id" component={ToDoForm} />
            <Route path="/todo/create/" component={ToDoForm} />
            <Route component={PageNotFound} />
        </Switch>
    )
}
export default Router; 