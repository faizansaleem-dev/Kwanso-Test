import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
      color: "white",
      textDecoration: "none",
      marginRight: "10px"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Frontend Test
          </Typography>
            <Link to="/create-task" className={classes.link}>
                Add Task
            </Link>
            <Link to="/list-task"  className={classes.link}>
                Task List
            </Link>
            <Link to="/bulk-delete"  className={classes.link}>
                Bulk Delete
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
