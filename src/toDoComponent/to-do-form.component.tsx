import React, { Fragment, useState } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { GetToDo } from '../libs/to-do-data-service';
import ToDoList from './todo-list.interface';

type TParams = { id?: number }

type TMatch = {
    params: TParams;
    path: string;
    url: string;
    isExact: boolean;
}

type ToDoFormProps = {
    match: TMatch;
}

const ToDoForm: React.FC<ToDoFormProps> = (props) => {
    const [data, setData] = useState<ToDoList | null>(null);
    const title = props.match.params.id === undefined ? "Add To Do List" : `Edit To Do List ${props.match.params.id}`;
    
    if(props.match.params.id !== undefined){
        GetToDo(props.match.params.id).then((data)=>{
            setData(data);
        });
    }

    return (
        <Fragment>
            <Paper>
                <Typography variant="h5" component="h3">
                    {title}
                </Typography>
            </Paper>
        </Fragment>
    );
}

export default ToDoForm;