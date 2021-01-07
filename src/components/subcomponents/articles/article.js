import React from 'react'
// Import For Text editor
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import from Material-Ui
import {TextField, Grid, Button, MenuItem, Paper, Typography} from "@material-ui/core"
function Article() {
    const [article, setData] = React.useState({type:'', title:'', img:'', description:'', longDes:''})
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert("submitted successfully")
    }
    return (
        <Grid container spacing={4}>
            <Grid item md={1}/>
            <Grid item md={9}  component={Paper}>
                <Typography variant="h4" align="center"> Add an Article</Typography>
        <form onSubmit={handleSubmit}>
            <TextField className="m-2 mb-3" variant="outlined" select label="Select Story Type" fullWidth onChange={(e) => setData({...article, type:e.target.value})}><MenuItem>type</MenuItem></TextField> 
            <TextField className=" m-2 mb-3" variant="outlined" type="text" label="Title" fullWidth onChange={(e) => setData({...article, title:e.target.value})} />
            <input className="m-2 mb-3" variant="filled" type="file" fullWidth onChange={(e) => setData({...article, img:e.target.value})} />
            <TextField className="m-2 mb-3" variant="outlined" type="text" multiline rows={7} label="Short Description" fullWidth onChange={(e) => setData({...article, description:e.target.value})} />
            <label>Long Descritption</label>
            <Editor
                
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
            />
            <Button variant="contained" className="bgColor text-light" type="submit">Apply</Button>
        </form>
        </Grid>
        <Grid item md={1}/>
        </Grid>
    )
}

export default Article
