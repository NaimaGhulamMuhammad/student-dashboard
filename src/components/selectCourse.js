import React from 'react'
import {Paper, Grid,TextField, MenuItem, Button,Typography, Divider} from "@material-ui/core"
function SelectCourse(props) {
 const {course , handleChange} = props
  
    
    return (
      <Grid container >
        <Grid item md={2} xsm={0}/>
        <Grid item md={8} xsm={1} component={Paper}  className="p-5 rounded">
          <Typography variant="h4" nowrap className="mb-2" align="center">Select Course</Typography>
          <Divider /><br />
           <TextField
           id="select-course"
           variant="outlined"
           select 
           fullWidth
           label="Courses"
           value={course}
           onChange={handleChange}
           className="mb-5 mt-5">
             <MenuItem value="English">English</MenuItem>
             <MenuItem value="Math">Math</MenuItem>
             <MenuItem value="Urdu">Urdu</MenuItem>
             <MenuItem value="Computer">Computer</MenuItem>
           </TextField>
          <Button className="bgColor text-light" variant="contained">
            Next
          </Button>
            
            
            </Grid>
            <Grid  item md={2} xsm={0}/>
        </Grid>
       
    )
}

export default SelectCourse
