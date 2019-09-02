import React, { Fragment } from 'react';
import Card from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IHomeProps from './homeProps.interface';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import ToDoItem from '../toDoComponent/todo.class';
import ToDoList from '../toDoComponent/todo-list.class';
import ToDoCard from './to-do-card';

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
  const toDoList = new ToDoList("Monday ToDo List", toDoData);
  const prevToDoList = new ToDoList("Sunday To Do List", toDoData);
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
          <ToDoCard cardTitle="Recent To Do Lost" toDoList={toDoList} checkEnable={true} />
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
          <ToDoCard cardTitle="Recently Closed" toDoList={prevToDoList} checkEnable={false} />
        </Grid>
      </Grid>

    </Fragment>
  );
}

export default withStyles(styles as any)(Home);