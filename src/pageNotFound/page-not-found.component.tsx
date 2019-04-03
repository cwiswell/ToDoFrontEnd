import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export default class PageNotFound extends Component {
  render() {

    return (
      <Card style={{padding: '10px'}}>
        <Typography variant="display1">
            Oh Noes
        </Typography>
        <Typography variant="display1">
            You went some where you shouldn't.
            For Shame
        </Typography>
     </Card>
    )
  };
}
