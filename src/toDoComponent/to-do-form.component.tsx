import React, { Fragment } from 'react';
import { Paper, Typography } from '@material-ui/core';

const ToDoForm: React.FC = () => {
    return (
        <Fragment>
            <Paper>
                <Typography variant="h5" component="h3">
                    Edit To Do List
                </Typography>
            </Paper>
        </Fragment>
    );
}

export default ToDoForm;