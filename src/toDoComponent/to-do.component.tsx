import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

export default class ToDo extends Component {
    public state = {
        checked: [0],
    };

    handleToggle = (value: any) => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        return (
            <Fragment>
                <List >
                    {[0, 1, 2, 3].map(value => (
                        <ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)} style={{
                            textDecoration: this.state.checked.indexOf(value) !== -1 ? 'line-through' : 'none'
                          }}>
                            <Checkbox
                                checked={this.state.checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                            />
                            <ListItemText primary={`Line item ${value + 1}`} />
                        </ListItem>
                    ))}
                </List>
            </Fragment>
        )
    };
}
