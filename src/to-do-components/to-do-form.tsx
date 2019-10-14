import React, { Fragment, useState } from 'react';
import { Paper, Typography, Button, Input, Divider, Grid } from '@material-ui/core';
import { GetToDo } from '../libs/to-do-data-service';
import ToDoList from '../interfaces/todo-list';
import AddIcon from '@material-ui/icons/Add';
import ToDoFormBody from './to-do-form-body';
import ToDoItem from '../interfaces/todo';

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
    const [data, setData] = useState<ToDoList | null>({ title: '' } as ToDoList);
    const [newText, setNewText] = useState<string>('');

    const id = props.match.params.id;
    const title = id === undefined ? "Add To Do List" : `Edit To Do List ${id}`;

    if (props.match.params.id !== undefined) {
        GetToDo(props.match.params.id).then((data) => {
            setData(data);
        });
    }

    const saveChanges = () => {

    };

    const onTitleChange = (e: React.FormEvent<HTMLTextAreaElement|HTMLInputElement>) =>{
        let newData = data;
        if(newData === null || newData === undefined){
            newData = {} as ToDoList;
        }
        newData.title = e.currentTarget.value;
        setData({...newData});
    }

    const onTextChange = (e: React.FormEvent<HTMLTextAreaElement|HTMLInputElement>) => {
        setNewText(e.currentTarget.value);
    };


    const toDoTitle = data === null || data === undefined ?
        (<Input defaultValue="To Do Title" inputProps={{ 'aria-label': 'to do title', }} onChange={onTitleChange} />) :
        (<Input value={data.title} inputProps={{ 'aria-label': 'to do title', }} onChange={onTitleChange} />);

    const body = data === null && id !== undefined ?
        (<Typography> No to do list with id</Typography>) :
        (<ToDoFormBody data={data == null ? null : data.toDoItems} />);

    const addItem = () => {
        let newData = data;
        if(newData == null){
            newData = {} as ToDoList;
        }else if(newData.toDoItems == null){
            newData.toDoItems = []; 
        }
        let newToDoItem = { text: newText, checked: false } as ToDoItem;
        newData.toDoItems.push(newToDoItem);
        setData({...newData});
        setNewText('');
    };

    return (
        <Fragment>
            <Paper style={{ padding: '10px', maxWidth: '800px' }}>
                <Typography variant="h5" component="h3" style={{ textAlign: 'center' }}>
                    {title}
                </Typography>
                <form>
                    {toDoTitle}
                    <Divider variant="middle" style={{ margin: '20px 0' }} />
                    <Grid container spacing={1}>
                        <Grid item xs>
                            <Input
                                value={newText}
                                onChange={onTextChange}
                                inputProps={{ 'aria-label': 'to do item', }}
                                style={{ width: '100%' }} />
                        </Grid>
                        <Grid item xs={2} style={{ textAlign: 'center' }}>
                            <Button variant="contained" color="primary" onClick={addItem} >
                                Add Item <AddIcon />
                            </Button>
                        </Grid>
                    </Grid>



                    <Divider variant="middle" style={{ margin: '20px 0' }} />
                    {body}
                    <Divider variant="middle" style={{ margin: '20px 0' }} />

                    <Button variant="contained" color="primary" onClick={saveChanges} >
                        Save
                    </Button>

                </form>
            </Paper>
        </Fragment>
    );
}

export default ToDoForm;