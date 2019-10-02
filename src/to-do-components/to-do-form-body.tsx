import React, { Fragment, useState } from 'react';
import ToDoList from '../interfaces/todo-list';
import { Typography, Input, Divider } from '@material-ui/core';

type ToDoFormItemProps = {
    data: ToDoList;
}

const ToDoFormBody: React.FC<ToDoFormItemProps> = (props) => {
    const [data, setData] = useState<ToDoList | null>({} as ToDoList);

    const title = data == null ?
    (<Input defaultValue="To Do Title"  inputProps={{'aria-label': 'to do title',}}/>):
    (<Input value={data.title} defaultValue="To Do Tite"  inputProps={{'aria-label': 'to do title',}}/>);

    const body = data == null ? 
    (<Typography> No data</Typography>) : 
    data.toDoItems.map((item, key) => (<Input key={key} value={item.text} defaultValue="To Do Item"  inputProps={{'aria-label': 'to do item',}}/>));

    return (
        <Fragment>
            {title}
            <Divider variant="middle" />
            {body}
        </Fragment>
    );
}

export default ToDoFormBody;