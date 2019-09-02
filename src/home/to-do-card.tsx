import React, { Fragment } from 'react';
import Card from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import ToDo from '../toDoComponent/to-do.component';
import IToDoCard from './to-do-card-props.interface';

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

export default ToDoCard;