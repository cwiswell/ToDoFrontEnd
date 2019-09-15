import React, { useState, Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ToDoItem from './todo.interface';

type ToDoCheckItemProps = {
    data: ToDoItem;
    key: number;
    enabled: boolean;
}

const ToDoCheckItem: React.FC<ToDoCheckItemProps> = (props) => {
    const [checked, setChecked] = useState<boolean>(props.data.checked);

    const handleToggle = () => {
        if (props.enabled) {
            setChecked(!checked);
        }
    };

    return (
        <Fragment>
            <ListItem role={undefined} dense button onClick={handleToggle} style={{
                textDecoration: checked ? 'line-through' : 'none'
            }}>
                <Checkbox
                    disabled={!props.enabled}
                    checked={checked}
                    tabIndex={-1}
                    disableRipple
                />
                <ListItemText primary={props.data.text} />
            </ListItem>
        </Fragment>
    );
}

export default ToDoCheckItem;