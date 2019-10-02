import React, { Fragment, useEffect, useState } from 'react';
import { Typography, Input } from '@material-ui/core';
import ToDoItem from '../interfaces/todo';

type ToDoFormItemProps = {
    data: ToDoItem[] | null;
}

const ToDoFormBody: React.FC<ToDoFormItemProps> = (props) => {
    const [data, setData] = useState<ToDoItem[] | null>(null);

    useEffect(() => {
        setData(props.data);
    }, [props.data])
    
    const body = data === null || data === undefined  ? 
        (<Typography> No data</Typography>) : 
        data.map((item, key) => (
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