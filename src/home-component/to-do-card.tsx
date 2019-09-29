import React, { Fragment } from 'react';
import Card from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ToDo from '../toDoComponent/to-do.component';
import ToDoList from '../interfaces/todo-list';
import { Typography } from '@material-ui/core';

type IToDoCard = {
    cardTitle: string;
    toDoList: ToDoList | null;
    checkEnable: boolean | null;
}

const ToDoCard: React.FC<IToDoCard> = (props) => {

    const editAction = props.checkEnable && props.toDoList !== null ? 
        ( <CardActions disableSpacing>
            <IconButton aria-label="edit to do list">
                <EditIcon />
            </IconButton>
        </CardActions>) :
        null;
    
    const subheader = props.toDoList === null ? null : props.toDoList.title;
    const cardBody = props.toDoList === null ? 
        (<Typography>No to do lists available.</Typography>) :
        (<ToDo data={props.toDoList as ToDoList} enabled={props.checkEnable as boolean} />) 

    return (
        <Fragment>
            <Card >
                <CardHeader title={props.cardTitle} subheader={subheader} action={editAction} />
                <CardContent>
                    {cardBody}
                </CardContent>     
            </Card>
        </Fragment>
    );
}

export default ToDoCard;