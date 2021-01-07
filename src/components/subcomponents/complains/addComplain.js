import React from 'react'
import {TableRow, FormGroup, Grid, TextField, Paper, FormLabel, Button} from "@material-ui/core"


function AddComplain(props) {
    
    const {handleSubmit, handleChange} = props
    return (
        <Grid container spacing={4} className="m-3">
       
        <Grid item md={2}/>
        <Grid item component={Paper} md={8} className="p-5">
            <form onSubmit={(d) => handleSubmit(d)}>
                <FormGroup  >
                    <FormLabel>Message</FormLabel>
                    <TextField multiline rows={6} variant="outlined" required placeholder="Enter Your Complain" onChange={(e)=>handleChange(e)} />
                    {/* <FormControl.Feedback type="invalid">This field is required</Form.Control.Feedback> */}
                </FormGroup>
                
                <Button type="submit" className="bgColor mt-4">Submit complains</Button>
            </form>
            </Grid>
            <Grid item md={2}/>
                </Grid>
    )
}

export default AddComplain
