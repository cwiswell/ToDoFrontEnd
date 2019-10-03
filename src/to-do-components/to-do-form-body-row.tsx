import React, { Fragment, useEffect, useState } from 'react';
import { Input, Grid, Checkbox, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ToDoItem from '../interfaces/todo';

type ToDoFormItemProps = {
    data: ToDoItem | null;
}

const ToDoFormBodyItem: React.FC<ToDoFormItemProps> = (props) => {
    const [checked, setChecked] = useState<boolean>(false);
    const [text, setText] = useState<string>('');

    useEffect(() => {
        if(props.data !== null){
            setChecked(props.data.checked);
            setText(props.data.text);
        }
    }, [props.data])

    const onTextChange = (e: React.FormEvent<HTMLTextAreaElement|HTMLInputElement>) =>{
        setText(e.currentTarget.value);
    }

    return (
        <Fragment>
            <Grid container spacing={1}>
                <Grid item xs={1} style={{textAlign: 'center'}}>
                    <Checkbox
                        checked={checked}
                        tabIndex={-1}
                        disableRipple
                    />
                </Grid>
                <Grid item xs>
                    <Input
                        value={text}
                        onChange={onTextChange}
                        defaultValue="To Do Item"
                        inputProps={{ 'aria-label': 'to do item', }}
                        style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={1} style={{textAlign: 'center'}}>
                    <IconButton><DeleteIcon/></IconButton>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default ToDoFormBodyItem;