import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const PageNotFound: React.FC = () => {
    return (
      <Card style={{padding: '10px'}}>
        <Typography variant="h1">
            Oh Noes!
        </Typography>
        <Typography variant="h4">
            You went some where you shouldn't.
            <br />
            Shame On You
        </Typography>
     </Card>
    )
}

export default  PageNotFound;