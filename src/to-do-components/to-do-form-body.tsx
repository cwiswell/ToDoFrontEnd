import React, { Fragment, useState } from 'react';
import ToDoList from '../interfaces/todo-list';

type ToDoFormItemProps = {
    data: ToDoList;
}

const ToDoFormBody: React.FC<ToDoFormItemProps> = (props) => {
    const [data, setData] = useState<ToDoList | null>({} as ToDoList);


    return (
        <Fragment>

        </Fragment>
    );
}

export default ToDoFormBody;