import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from "@material-ui/core/Paper"
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from "@material-ui/core/Avatar"
import SelectCourse from "../selectCourse"
import AddComplain from "../subcomponents/complains/addComplain"
import ViewComplain from "../subcomponents/complains/viewComplain"
import Assignment from "../subcomponents/assignment"
import DashboardHome from "../dashboardHome"
import {
    BrowserRouter as Router,
    Switch,
    useRouteMatch,
    Route
} from "react-router-dom"
import SideBar from "../sidebar"
import avatar from "../../images/avatar.png"
import Main from "../main";
import useStyles from "./styles"

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
    <div className={classes.root}>
    <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color="default"
      >
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>setOpen(!open)}
            edge="start"
            className={classes.menuButton}
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap display="inline" style={{flexGrow:1}}>
            Student Dashboard
          </Typography >
          <Avatar src={avatar}  width="50px"/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Divider />
        <SideBar close={()=>setOpen(!open)} open={open}/>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Main/>
      </main>
    </div>
                
    </>
  );
}



