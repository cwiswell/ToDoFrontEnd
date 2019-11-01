import React, { Fragment } from 'react';
import Card from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ToDo from './to-do';
import ToDoList from '../interfaces/todo-list';
import { Typography, Box } from '@material-ui/core';

type IToDoCard =  {
    cardTitle: string;
    toDoList: ToDoList | null;
    checkEnable: boolean | null;    
    editFunction: (id: number) => void;
}

const ToDoCard: React.FC<IToDoCard> = (props) => {

    const editAction = props.checkEnable && props.toDoList !== null ? 
        ( <CardActions disableSpacing>
            <IconButton aria-label="edit to do list" onClick={() => {props.editFunction(props.toDoList === null ? -1 : props.toDoList.id)}}>
                <EditIcon />
            </IconButton>
        </CardActions>) :
        null;
    
    const subheader = props.toDoList === null ? null : props.toDoList.title;
    const cardBody = props.toDoList === null ? 
        (<Typography>No to do lists available.</Typography>) :
        (<ToDo data={props.toDoList as ToDoList} enabled={props.checkEnable as boolean} />) 
        
    const cardFooter = props.toDoList === null || props.toDoList.dateCreated === null ? 
    (<Fragment></Fragment>) :
    (
    <Typography component="div">
        <Box fontStyle="italic" m={1} fontWeight="fontWeightLight" fontSize="fontSize">
            Date Created: {props.toDoList.dateCreated.toLocaleString()}
        </Box>
    </Typography>
    ) 

    return (
        <Fragment>
            <Card >
                <CardHeader title={props.cardTitle} subheader={subheader} action={editAction} />
                <CardContent>
                    {cardBody}
                    {cardFooter}
                </CardContent>     
            </Card>
        </Fragment>
    );
}

export default ToDoCard;