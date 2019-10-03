import React, { Fragment, useEffect, useState } from 'react';
import { Input, Grid, Checkbox } from '@material-ui/core';
import ToDoItem from '../interfaces/todo';

type ToDoFormItemProps = {
    data: ToDoItem | null;
}

const ToDoFormBodyItem: React.FC<ToDoFormItemProps> = (props) => {
    const [data, setData] = useState<ToDoItem | null>(null);

    useEffect(() => {
        setData(props.data);
    }, [props.data])

    return (
        <Fragment>
            <Grid container spacing={1}>
                <Grid item xs={1} style={{textAlign: 'center'}}>
                    <Checkbox
                        checked={data == null ? false : data.checked}
                        tabIndex={-1}
                        disableRipple
                    />
                </Grid>
                <Grid item xs>
                    <Input
                        value={data == null ? null : data.text}
                        defaultValue="To Do Item"
                        inputProps={{ 'aria-label': 'to do item', }}
                        style={{ width: '100%' }} />
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default ToDoFormBodyItem;