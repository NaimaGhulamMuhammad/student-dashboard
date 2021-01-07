import React from 'react'
import {Paper, Grid,TextField, MenuItem, Button,Typography, Divider} from "@material-ui/core"


function AddArticleType(props) {
    const handleChange=()=>{

    }
    return (
      <Grid container >
        <Grid item md={2} xsm={0}/>
        <Grid item md={8} xsm={1} component={Paper}  className="p-5 rounded">
          <Typography variant="h4" nowrap className="mb-2" align="center">Add Article Type</Typography>
          <Divider /><br />
           <TextField
           id="article-type"
           variant="outlined"
           select 
           fullWidth
           label="Add type"
           onChange={handleChange}
           className="mb-5 mt-5">
               {/* {types.map(data=>(
             <MenuItem value="" key={data}>{data}</MenuItem>
             ))} */}
           </TextField>
          <Button className="bgColor text-light" variant="contained">
            Next
          </Button>
            
            
            </Grid>
            <Grid  item md={2} xsm={0}/>
        </Grid>
       
    )
}

export default AddArticleType
