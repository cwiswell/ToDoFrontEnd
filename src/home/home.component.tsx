import React, { Fragment, useState } from 'react';
import Card from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IHomeProps from './homeProps.interface';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import ToDoList from '../toDoComponent/todo-list.interface';
import ToDoCard from './to-do-card';
import { GetMostRecentActiveToDo, GetRecentlyClosedToDo, GetActiveToDos } from '../libs/to-do-data-service';

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
  const [currentToDoList, setCurrentToDoList] = useState<ToDoList | null>(null);
  const [recentlyClosed, setRecentlyClosed] = useState<ToDoList | null>(null);
  const [activeToDoLists, setActiveToDoLists] = useState<ToDoList[] | null>(null);

  GetMostRecentActiveToDo().then((data) =>{
    setCurrentToDoList(data);
  });

  GetRecentlyClosedToDo().then((data) =>{
    setRecentlyClosed(data);
  });

  GetActiveToDos().then((data) =>{
    setActiveToDoLists(data);
  });

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
          <ToDoCard cardTitle="Recent To Do Lost" toDoList={currentToDoList} checkEnable={true} />
        </Grid>
        <Grid item md={4}>
          <Card >
            <CardHeader title="Active To Do Lists">
            </CardHeader>
            <CardContent>
            {activeToDoLists == null ? 
                (<Typography>No Active To Do Lists</Typography>): 
                activeToDoLists.map((item, key) => (
                    <Typography key={key}>{item.title}</Typography>
                ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <ToDoCard cardTitle="Recently Closed" toDoList={recentlyClosed} checkEnable={false} />
        </Grid>
      </Grid>

    </Fragment>
  );
}

export default withStyles(styles as any)(Home);