import React from 'react';
import clsx from 'clsx';
import {Drawer, AppBar, Toolbar, Typography,Divider, IconButton,Avatar } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
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



