import React, { Fragment } from 'react';
import { Paper, Typography } from '@material-ui/core';

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
    console.log(props);
    const title = props.match.params.id === undefined ? "Add To Do List" : `Edit To Do List ${props.match.params.id}`;

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