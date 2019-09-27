import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/home';
import PageNotFound from '../pageNotFound/page-not-found.component';
import ToDoForm from '../toDoComponent/to-do-form.component';


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/todo/edit/:id?" component={ToDoForm} />
            <Route component={PageNotFound} />
        </Switch>
    )
}
export default Router; 