import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import IToDoProps from './todoProps.interface';

import ToDoCheckItem from './to-do-item.component';

const ToDo: React.FC<IToDoProps> = (props) => {
    return (
        <Fragment>
            <List >
                {props.data.ToDoItems.map((item, key) => (
                    <ToDoCheckItem key={key} data={item} enabled={props.enabled}/>
                ))}
            </List>
        </Fragment>
    );
}

export default ToDo;