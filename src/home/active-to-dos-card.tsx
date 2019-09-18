import React, { Fragment, useState, useEffect } from 'react';
import Card from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import ToDoList from '../toDoComponent/todo-list.interface';
import { GetActiveToDos } from '../libs/to-do-data-service';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const ActiveToDosCard: React.FC = () => {
    const [activeToDoLists, setActiveToDoListsTest] = useState<ToDoList[] | null>([{ title: "Other list", toDoItems: [] }, { title: "Weekly To Dos", toDoItems: [] }]);

    const loadData = () => {
        GetActiveToDos().then((data) => {
            setActiveToDoListsTest(data);
        });
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Fragment>
            <Card >
                <CardHeader title="Active To Do Lists">
                </CardHeader>
                <CardContent onClick={loadData}>
                    {activeToDoLists == null ?
                        (<Typography>No Active To Do Lists</Typography>) :
                        activeToDoLists.map((item, key) => (
                            <Typography key={key}>
                               <IconButton><EditIcon /></IconButton> {item.title} ({item.toDoItems.filter(x=>!x.checked).length})
                            </Typography>
                        ))}
                </CardContent>
            </Card>
        </Fragment>
    );
}

export default ActiveToDosCard;