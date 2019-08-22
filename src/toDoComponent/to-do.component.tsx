import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IToDoProps from './todoProps.interface';
import ToDoItem from './todo.class';

export default class ToDo extends Component<IToDoProps,any> {
    constructor(props: IToDoProps) {
      super(props);
    }

    public state = {
        data: this.props.data
    }

    handleToggle = (item: ToDoItem) => () => {
        item.checked =  !item.checked;
        this.setState({data: this.props.data});
    };

    render() {
        return (
            <Fragment>
                <List >
                    {this.props.data.map((item, key) => (
                        <ListItem key={key} role={undefined} dense button onClick={this.handleToggle(item)} style={{
                            textDecoration: item.checked? 'line-through' : 'none'
                          }}>
                            <Checkbox
                                checked={item.checked}
                                tabIndex={-1}
                                disableRipple
                            />
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Fragment>
        )
    };
}
