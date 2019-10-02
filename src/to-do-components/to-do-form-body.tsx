import React, { Fragment } from 'react';
import ToDoList from '../interfaces/todo-list';
import { Typography, Input } from '@material-ui/core';

type ToDoFormItemProps = {
    data: ToDoList;
}

const ToDoFormBody: React.FC<ToDoFormItemProps> = (props) => {
    const data = props.data;

    const body = data === null || data === undefined || data.toDoItems === undefined || data.toDoItems === null ? 
        (<Typography> No data</Typography>) : 
        data.toDoItems.map((item, key) => (
            <Input key={key} 
                value={item.text} 
                defaultValue="To Do Item" 
                inputProps={{'aria-label': 'to do item',}} 
                style={{width: '100%'}}/>));

    return (
        <Fragment>
            {body}
        </Fragment>
    );
}

export default ToDoFormBody;