import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { mainListItems } from './listItems';

export default class Menu extends Component{

    render(){
        return(
            <Fragment>
                <List>{mainListItems}</List>
            </Fragment>
        )
    }
}