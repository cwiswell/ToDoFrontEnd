import React, { Fragment } from 'react';
import Card from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ToDo from './to-do';
import ToDoList from '../interfaces/todo-list';
import { Typography } from '@material-ui/core';
import { withRouter, RouteComponentProps } from "react-router";

type IToDoCard = RouteComponentProps & {
    cardTitle: string;
    toDoList: ToDoList | null;
    checkEnable: boolean | null;
}

const ToDoCard: React.FC<IToDoCard> = (props) => {

    const editToDoList = (id: number) =>{
        if(id === -1){
            return;
        }
        props.history.push(`/todo/edit/${id}`);
    }

    const editAction = props.checkEnable && props.toDoList !== null ? 
        ( <CardActions disableSpacing>
            <IconButton aria-label="edit to do list" onClick={() => {editToDoList(props.toDoList === null ? -1 : props.toDoList.id)}}>
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

export default withRouter(ToDoCard);