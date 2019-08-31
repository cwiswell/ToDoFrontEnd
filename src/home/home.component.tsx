import React, { Fragment } from 'react';
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
    padding: theme.spacing(2),
  },
});

const Home: React.FC<IHomeProps> = (props) => {
  const toDoData = [new ToDoItem("Some Item", false), new ToDoItem("Do Dishes", true), new ToDoItem("Yard Work", false), new ToDoItem("Make dinner", false)];

  const classes = props['classes'];

  return (
    <Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Grid item md={12}>
          <Card >
            <CardHeader title="Some Graph of history">
            </CardHeader>

            <CardContent>
              <Typography>
                Some graph will go here.
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card >
            <CardHeader title="Recent To Do List">
            </CardHeader>

            <CardContent>
              <ToDo data={toDoData} enabled={true}/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card >
            <CardHeader title="Active To Do Lists">
            </CardHeader>

            <CardContent>
              <Typography>
                to do list 1
                </Typography>
              <Typography>
                to do list 2
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card >
            <CardHeader title="Recently Closed">
            </CardHeader>

            <CardContent>
              <ToDo data={toDoData} enabled={false}/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Fragment>
  );

}

export default withStyles(styles as any)(Home);