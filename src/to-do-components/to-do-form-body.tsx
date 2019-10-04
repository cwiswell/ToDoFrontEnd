import React, { Fragment, useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import ToDoItem from '../interfaces/todo';
import ToDoFormBodyItem from './to-do-form-body-row';

type ToDoFormItemProps = {
    data: ToDoItem[] | null;
}

const ToDoFormBody: React.FC<ToDoFormItemProps> = (props) => {
    const [data, setData] = useState<ToDoItem[] | null>(null);

    useEffect(() => {
        setData(props.data);
    }, [props.data])
    
    const removeRow = (index: number) =>{

    }

    const body = data === null || data === undefined  ? 
        (<Typography> No data</Typography>) : 
        data.map((item, key) => (
            <ToDoFormBodyItem data={item} key={key} deleteFunction={removeRow} />));

    return (
        <Fragment>
            {body}
        </Fragment>
    );
}

export default ToDoFormBody;