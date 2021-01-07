import React from 'react'
import {Grid, Typography} from "@material-ui/core"
import {withRouter, Link} from "react-router-dom"
import Widget from "./Widget"


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
                
            <Widget text="Assignment" link={()=>history.push('/viewAssignment')}/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="View Online Test" link={()=>history.push('/viewTest')}/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="View Uploaded test" link={()=>history.push('/viewTest')}/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="Notes"/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="Add Discussion" link={()=>history.push('/viewTest')}/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="Lecture" link={()=>history.push('/viewTest')}/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="Add Complain" link={()=>history.push('/viewTest')}/>
            </Grid >
            <Grid item md={3}  xsm={8} sm={6}>
            <Widget text="FeedBack" link={()=>history.push('/Feedback')}/>
            </Grid >
            
                </Grid>
                </Grid>
    )
}

export default withRouter(DashboardHome)
