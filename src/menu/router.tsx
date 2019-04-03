import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../home/home.component';
import PageNotFound from '../pageNotFound/page-not-found.component';

export default class Router extends Component{

    render(){
        return(
            <Switch>                
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/Home" component={Home} />
                <Route component={PageNotFound} />
            </Switch>
        )
    }
}