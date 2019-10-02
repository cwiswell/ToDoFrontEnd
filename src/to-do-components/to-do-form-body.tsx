import React, { Fragment } from 'react';
import ToDoList from '../interfaces/todo-list';
import { Typography, Input, Divider } from '@material-ui/core';

type ToDoFormItemProps = {
    data: ToDoList;
}

const ToDoFormBody: React.FC<ToDoFormItemProps> = (props) => {
    const data = props.data;

    const title = data === null || data === undefined ?
    (<Input defaultValue="To Do Title"  inputProps={{'aria-label': 'to do title',}}/>):
    (<Input value={data.title} defaultValue="To Do Tite"  inputProps={{'aria-label': 'to do title',}}/>);

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
            {title}
            <Divider variant="middle" style={{margin: '20px 0'}} />
            {body}
        </Fragment>
    );
}

export default ToDoFormBody;