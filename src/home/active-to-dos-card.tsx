import React, { Fragment, useState } from 'react';
import Card from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import ToDoList from '../toDoComponent/todo-list.interface';
import { GetActiveToDos } from '../libs/to-do-data-service';

const ActiveToDosCard: React.FC = () => {
    const [activeToDoLists, setActiveToDoLists] = useState<ToDoList[] | null>([{ title: "Other list", toDoItems: [] }, { title: "Weekly To Dos", toDoItems: [] }]);

    GetActiveToDos().then((data) => {
        // if(data == null){
        //     setActiveToDoLists(null);
        // }else{
        //     let temp: ToDoList[] = data.map((value) => {return value});
        //     setActiveToDoLists([...temp]);
        // }
    });

    return (
        <Fragment>
            <Card >
                <CardHeader title="Active To Do Lists">
                </CardHeader>
                <CardContent>
                    {activeToDoLists == null ?
                        (<Typography>No Active To Do Lists</Typography>) :
                        activeToDoLists.map((item, key) => (
                            <Typography key={key}>{item.title}</Typography>
                        ))}
                </CardContent>
            </Card>
        </Fragment>
    );
}

export default ActiveToDosCard;