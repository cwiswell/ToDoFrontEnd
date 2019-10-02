import React, { Fragment, useState } from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import { GetToDo } from '../libs/to-do-data-service';
import ToDoList from '../interfaces/todo-list';
import AddIcon from '@material-ui/icons/Add';
import ToDoFormBody from './to-do-form-body';

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
    const [data, setData] = useState<ToDoList | null>({} as ToDoList);

    const id = props.match.params.id;
    const title = id === undefined ? "Add To Do List" : `Edit To Do List ${id}`;

    if (props.match.params.id !== undefined) {
        GetToDo(props.match.params.id).then((data) => {
            setData(data);
            console.log(data);
        });
    }

    const body = data == null && id !== undefined ?
        (<Typography> No to do list with id</Typography>) :
        (<ToDoFormBody data={data as ToDoList}/>);

    const addItem = () => {
        console.log("add Item");
    };

    return (
        <Fragment>
            <Paper style={{ padding: '10px' }}>
                <Typography variant="h5" component="h3" style={{ textAlign: 'center' }}>
                    {title}
                </Typography>
                {body}
                <Button variant="contained" color="primary" onClick={addItem} >
                    Add Item <AddIcon />
                </Button>
            </Paper>
        </Fragment>
    );
}

export default ToDoForm;