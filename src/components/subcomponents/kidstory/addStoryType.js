import React from 'react'
import {Paper, Grid,TextField, MenuItem, Button,Typography, Divider} from "@material-ui/core"


function AddStoryType(props) {
  const {handleChange} = props
 
    
    return (
      <Grid container >
        <Grid item md={2} xsm={0}/>
        <Grid item md={8} xsm={1} component={Paper}  className="p-5 rounded">
          <Typography variant="h4" nowrap className="mb-2" align="center">Add Kid Story Type</Typography>
          <Divider /><br />
           <TextField
           id="story-type"
           variant="outlined"
           fullWidth
           type="text"
           label="Story Type"
           onChange={handleChange}
           className="mb-5 mt-5" />
           
          <Button className="bgColor text-light" variant="contained">
            Next
          </Button>
            
            
            </Grid>
            <Grid  item md={2} xsm={0}/>
        </Grid>
       
    )
}

export default AddStoryType
