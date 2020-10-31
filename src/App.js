import React ,{Fragment} from "react";
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from "react-dom";
import UploadPreview from './components/uploadPreview'
import Header from './components/header'
import {Grid,Paper,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(5),
  },
  paper:{
    margin: 50,
    padding: 20,
  }
}));

export default function App() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Fragment>
      <Paper>
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Header />
        <Grid container justify="center" spacing={spacing}>
            <Grid item>
              <Paper className={classes.paper}><Typography> Upload Style Image- </Typography><UploadPreview /> </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}><Typography> Upload Content Image- </Typography><UploadPreview /> </Paper>
            </Grid>
        </Grid>
      </Grid>
      </Grid>
      </Paper>
		</Fragment>
  );
}

