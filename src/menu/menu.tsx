import React, { Fragment } from 'react';
import List from '@material-ui/core/List';

import { mainListItems } from './listItems';

const Menu: React.FC = () => {
    return (
        <Fragment>
            <List>{mainListItems}</List>
        </Fragment>
    );
}

export default Menu;