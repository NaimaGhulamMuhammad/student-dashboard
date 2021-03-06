import React from 'react'
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import TimelineIcon from '@material-ui/icons/Timeline';
import SubjectIcon from '@material-ui/icons/Subject';
import CloseIcon from "@material-ui/icons/Close"
import DashboardIcon from '@material-ui/icons/Dashboard';

import {IconButton, Divider, List, ListItem, ListItemIcon, ListItemText, Collapse} from  "@material-ui/core"
import { withRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../images/logo.png"

function SideBar(props) {
    const {open} = props
    const {history} = props
    const [item, setItem] = React.useState({})
    const handleOpen = (name) => {
        setItem({[name]: !item[name]})

        }
    const Menu = [
        {
            name: "Dashboard",
            icon: <DashboardIcon />,
            onClick: () => history.push('/')
        },
        {
            name: "Assignement",
            icon: <AssignmentIcon />,
            subMenu: [{
                subItemText: "View",
                subItemOnClick:() => history.push('/viewAssignment')
            }],
            onClick:() => handleOpen
        },
        {
            name: "Discussion",
            icon: <QuestionAnswerIcon />,
            onClick: ()=> history.push('/discussion')
        },
        {
            name: "Test",
            icon: <TimelineIcon />,
            subMenu:[{
                subItemText: "View Online Test",
                subItemOnClick:() => history.push('/viewTest')
                    },
                    {
                        subItemText: "View Uploaded Test",
                        subItemOnClick:() =>history.push('/viewUploadedTest')
                    },
                ],
        },
        {
            name: "Lecture",
            icon: <SubjectIcon />,
            onClick: ()=>history.push('/lectures')
        },
        {
            name: "Complains",
            icon: <AnnouncementIcon />,
            subMenu:[{
                subItemText: "Add",
                subItemOnClick:() => history.push('/addComplain')
                    },
                    {
                        subItemText: "View",
                        subItemOnClick:() => history.push('/viewComplain')
                    },
                ],
        },
        {
            name: "Kid Story",
            icon: <SubjectIcon />,
            subMenu:[{
                subItemText: "Kid Story",
                subItemOnClick:() => history.push('/kidstory')
                    },
                    {
                        subItemText: "Kid Story Type",
                        subItemOnClick:()=>history.push('/kidStoryType')
                    },
                ]
        },
        {
            name: "Articles",
            icon: <SubjectIcon />,
            subMenu:[{
                subItemText: "Articles",
                subItemOnClick:()=>history.push('/articles')
                    },
                    {
                        subItemText: "Articles type",
                        subItemOnClick:()=>history.push('/articlesType')
                    },
                ],
        },
        {
            name: "Announcement",
            icon: <QuestionAnswerIcon />,
            onClick: ()=>history.push('/announcement')
        },
    ]

    return (
        
                <div className={` sidebar`}>
                    <div className="logo " >
                            <img  src={Logo} alt="Logo-image" width="80px" height="60px" className="flex-grow-1" />
                           
                            <IconButton className=" text-light" onClick={props.close}>
                                <CloseIcon /> 
                            </IconButton>
                    </div>
                    <Divider />
                    <List className="text-light">
          {Menu.map((navItem) => {
              const {name, icon, subMenu, onClick} = navItem;
              return(
                  <div key={name}>
                  {subMenu ?
                    (<>
                        <ListItem key={name} button onClick={() =>handleOpen(name)}>
                        <ListItemIcon className="text-light">{icon}</ListItemIcon>
                            <ListItemText primary={name}/>
                            {item[name] ? <ExpandMoreIcon /> : <ChevronRightIcon/>}
                        </ListItem>
                        <Collapse in={item[name]} unmountOnExit component="li" unmountOnExit>
                            <List className={`bg-white text-dark m-3 shadow rounded ${open? '': 'd-none'}`} disablePadding>
                                {subMenu.map((subItem) => {
                                    const {subItemText, subItemOnClick} = subItem
                                    return(
                                <ListItem button key={subItemText} onClick={subItemOnClick}>
                                    <ListItemText >
                                        {subItemText}
                                    </ListItemText>
                                </ListItem>)})}
                            </List>
                        </Collapse></>
                    ):
                    (
                  <ListItem button key={name} onClick={onClick}>
                      <ListItemIcon className="text-light">{icon}</ListItemIcon>
                      <ListItemText>{name}</ListItemText>
                  </ListItem>)}</div>
              )
          })}
          
                </List>
                <div>
                    <IconButton onClick={props.close}>
                        <ChevronRightIcon />
                 </IconButton>
          </div>
                </div>
    )
}

export default withRouter(SideBar);
