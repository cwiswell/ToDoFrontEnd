import React, { Component, Fragment } from 'react';
import Card from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IHomeProps from './homeProps.interface';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, CardHeader, Grid } from '@material-ui/core';
import ToDo from '../toDoComponent/to-do.component';
import ToDoItem from '../toDoComponent/todo.class';

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Home extends Component<IHomeProps, any> {
  constructor(props: IHomeProps) {
    super(props);
  }
  toDoData = [new ToDoItem("Some Item", false), new ToDoItem("Do Dishes", false)];

  render() {
    const classes = this.props['classes'];

    return (
      <Fragment>
        <Grid container className={classes.root} spacing={16}>
          <Grid item md={4}>
            <Card >
              <CardHeader title="Wiswell Household ToDo List Application">
              </CardHeader>

              <CardContent>
                <Typography>
                  Lets do some stuff
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card >
              <CardHeader title="Current To Do List">
              </CardHeader>

              <CardContent>
                <ToDo data={this.toDoData} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </Fragment>
    )
  };
}

export default withStyles(styles as any)(Home);