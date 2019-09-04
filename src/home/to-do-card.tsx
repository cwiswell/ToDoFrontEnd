import React, { Fragment } from 'react';
import Card from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ToDo from '../toDoComponent/to-do.component';
import IToDoCard from './to-do-card-props.interface';

const ToDoCard: React.FC<IToDoCard> = (props) => {

    const editAction = props.checkEnable ? 
        ( <CardActions disableSpacing>
            <IconButton aria-label="edit to do list">
                <EditIcon />
            </IconButton>
        </CardActions>) :
        null;

    return (
        <Fragment>
            <Card >
                <CardHeader title={props.cardTitle} subheader={props.toDoList.title} action={editAction} />
                <CardContent>
                    <ToDo data={props.toDoList} enabled={props.checkEnable} />
                </CardContent>     
            </Card>
        </Fragment>
    );
}

export default ToDoCard;