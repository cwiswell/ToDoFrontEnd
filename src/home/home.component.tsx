import React, { Fragment, useState } from 'react';
import Card from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IHomeProps from './homeProps.interface';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import ToDoList from '../interfaces/todo-list';
import ToDoCard from './to-do-card';
import ActiveToDosCard from './active-to-dos-card';
import { GetMostRecentActiveToDo, GetRecentlyClosedToDo } from '../libs/to-do-data-service';
import { withStyles } from '@material-ui/styles';

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

  GetMostRecentActiveToDo().then((data) => {
    setCurrentToDoList(data);
  });

  GetRecentlyClosedToDo().then((data) => {
    setRecentlyClosed(data);
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
          <ActiveToDosCard />
        </Grid>
        <Grid item md={4}>
          <ToDoCard cardTitle="Recently Closed" toDoList={recentlyClosed} checkEnable={false} />
        </Grid>
      </Grid>

    </Fragment>
  );
}

export default withStyles(styles as any)(Home);