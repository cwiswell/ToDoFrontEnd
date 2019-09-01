import React, { Fragment } from 'react';
import Card from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, CardHeader, Grid } from '@material-ui/core';
import ToDo from '../toDoComponent/to-do.component';
import IToDoCard from './to-do-card-props.interface';

const styles = (theme: any) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
});

const ToDoCard: React.FC<IToDoCard> = (props) => {
    return (
        <Fragment>
            <Card >
                <CardHeader title={props.cardTitle} subheader={props.toDoList.title}>
                </CardHeader>
                <CardContent>
                    <ToDo data={props.toDoList} enabled={props.checkEnable} />
                </CardContent>
            </Card>
        </Fragment>
    );

}

export default (ToDoCard);