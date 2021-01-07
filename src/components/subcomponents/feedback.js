import React from 'react'
import {Paper, Grid,TextField, MenuItem, Button,Typography, Divider} from "@material-ui/core"

function FeedBack() {

    const [course, setCourse] = React.useState('Select Your Course');

  const handleChange = (event) => {
    setCourse(event.target.value);
  };
    return (
        <Grid container >
        <Grid item md={2} xsm={0}/>
        <Grid item container md={8} xsm component={Paper}  className="p-5 mt-3 rounded" direction="column" spacing={4}>
            <Grid item>
          <Typography variant="h4" nowrap className="mb-2" align="center">Feedback</Typography>
          <Divider /><br />
           <TextField
           id="select-course"
           variant="outlined"
           select 
           fullWidth
           label="Courses"
           value={course}
           autoFocus
           onChange={handleChange}
           >
             <MenuItem value="Select Your Course">Select Your Course</MenuItem>
             {/* <MenuItem value="Math">Math</MenuItem>
             <MenuItem value="Urdu">Urdu</MenuItem>
             <MenuItem value="Computer">Computer</MenuItem> */}
           </TextField>
          </Grid>
          <Grid item>
              <TextField multiline rows={6} variant="outlined" fullWidth label="Description" required/>
               {/* Need to add onClick function */}
              <Button className="bgColor text-light mt-4" variant="contained" type="submit">Add</Button>
          </Grid>
            </Grid>
            <Grid  item md={2} xsm={0}/>
        </Grid>
    )
}

export default FeedBack
