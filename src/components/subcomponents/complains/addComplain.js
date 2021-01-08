import React from 'react'
import {Typography, FormGroup, Grid, TextField, Paper, FormLabel, Button, Divider} from "@material-ui/core"


function AddComplain(props) {
    
    const {handleSubmit, handleChange} = props
    return (
        <Grid container spacing={4} className="m-3">
       
        <Grid item md={2}/>
        <Grid item component={Paper} md={8} className="p-5">
            <Typography variant="h4" align="center">Add Complain</Typography><Divider variant="middle" className="m-4"/>
            <form onSubmit={(d) => handleSubmit(d)}>
                <FormGroup  >
                    <FormLabel>Message</FormLabel>
                    <TextField multiline rows={6} variant="outlined" required placeholder="Enter Your Complain" onChange={(e)=>handleChange(e)} />
                    {/* <FormControl.Feedback type="invalid">This field is required</Form.Control.Feedback> */}
                </FormGroup>
                
                <Button type="submit" className="bgColor text-light mt-4">Submit complain</Button>
            </form>
            </Grid>
            <Grid item md={2}/>
                </Grid>
    )
}

export default AddComplain
