import React, { Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ToDoList from '../interfaces/todo-list';
import ToDoCard from '../to-do-components/to-do-card';
import ActiveToDosCard from './active-to-dos-card';
import { GetMostRecentActiveToDo, GetRecentlyClosedToDo } from '../libs/to-do-data-service';
import { withStyles } from '@material-ui/styles';
import { RouteComponentProps, withRouter } from 'react-router';
import { Button } from '@material-ui/core';

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

type IHomeProps = RouteComponentProps & {
  classes: any
};

const Home: React.FC<IHomeProps> = (props) => {
  const [currentToDoList, setCurrentToDoList] = useState<ToDoList | null>(null);
  const [recentlyClosed, setRecentlyClosed] = useState<ToDoList | null>(null);

  
  const editToDoList = (id: number) =>{
    if(id === -1){
        return;
    }
    props.history.push(`/todo/edit/${id}`);
  }

  const createToDoList = () =>{
    props.history.push('/todo/create');
  }

  GetMostRecentActiveToDo().then((data) => {
    setCurrentToDoList(data);
  });

  GetRecentlyClosedToDo().then((data) => {
    setRecentlyClosed(data);
  });

  const classes = props['classes'];

  return (
    <Fragment>
      <Button onClick={createToDoList}>Add New ToDo List</Button>
      <Grid container className={classes.root} spacing={2}>
        <Grid item md={4}>
          <ToDoCard cardTitle="Recent To Do List" toDoList={currentToDoList} checkEnable={true} editFunction={editToDoList} />
        </Grid>
        <Grid item md={4}>
          <ActiveToDosCard editFunction={editToDoList} newFunction={createToDoList} />
        </Grid>
        <Grid item md={4}>
          <ToDoCard cardTitle="Recently Closed" toDoList={recentlyClosed} checkEnable={false} editFunction={editToDoList}/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles as any)(withRouter(Home));