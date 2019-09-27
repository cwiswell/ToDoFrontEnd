import React, { Fragment } from 'react';
import List from '@material-ui/core/List';

import ToDoCheckItem from './to-do-item.component';
import ToDoList from '../interfaces/todo-list';

type IToDoProps = {
    data: ToDoList;
    enabled: boolean;
}

const ToDo: React.FC<IToDoProps> = (props) => {
    return (
        <Fragment>
            <List >
                {props.data.toDoItems.map((item, key) => (
                    <ToDoCheckItem key={key} data={item} enabled={props.enabled}/>
                ))}
            </List>
        </Fragment>
    );
}

export default ToDo;