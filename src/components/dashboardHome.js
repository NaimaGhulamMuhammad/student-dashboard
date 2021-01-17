import React from 'react'
import {Grid, Typography} from "@material-ui/core"
import {withRouter, Link} from "react-router-dom"
import Widget from "./Widget"

// images
import assignment from "../images/assignment.png"
import complains from "../images/complains.png"
import test from "../images/test.png"
import dashboard from "../images/dashboard.png"
import discussion from "../images/discussion.png"
import notes from "../images/notes.png"
import feedback from "../images/feedback.png"


function DashboardHome(props) {
    console.log(props)
    const {history} = props
    return (
        <Grid container direction="column" spacing={0} >
        <Grid item>
            <Typography className="m-3 ml-5 mt-5" variant="h4">Student Dashboard</Typography>
        </Grid>
        <Grid item container className="m-xsm-5" spacing={5} alignItems="center" justify="center">

            <Grid item md={3}  xsm={8} sm={6} >
                
            <Widget text="Assignment" image={assignment} link={()=>history.push('/viewAssignment')}/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="View Online Test" image={dashboard} link={()=>history.push('/viewTest')}/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="View Uploaded test" image={test} link={()=>history.push('/viewUploadedTest')}/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="Notes" image={notes} link={()=>history.push('/lectures')}/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="Add Discussion" image={discussion} link={()=>history.push('/discussion')}/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="Lecture" image={test} link={()=>history.push('/lectures')}/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="Add Complain" image={complains} link={()=>history.push('/addComplain')}/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="FeedBack" image={feedback} link={()=>history.push('/Feedback')}/>
            </Grid >
            
                </Grid>
                </Grid>
    )
}

export default withRouter(DashboardHome)
