import React from 'react'
// Import For Text editor
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import from Material-Ui
import {TextField, Grid, Button, MenuItem, Paper, Typography} from "@material-ui/core"
function Article() {
    const [kidstory, setData] = React.useState({type:'', title:'', img:'', description:'', longDes:''})
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert("submitted successfully")
    }
    const [editorState,setEditorState] = React.useState(EditorState.createEmpty())
    const onEditorStateChange = ()=>{
        setEditorState()
    }
    return (
        <Grid container spacing={4}>
            <Grid item md={1}/>
            <Grid item md={9}  component={Paper}>
                <Typography variant="h4" align="center"> Add Kid Story</Typography>
        <form onSubmit={handleSubmit}>
            <TextField className="m-2 mb-3" variant="outlined" select label="Select Story Type" fullWidth onChange={(e) => setData({...kidstory, type:e.target.value})}><MenuItem>type</MenuItem></TextField> 
            <TextField className=" m-2 mb-3" variant="outlined" type="text" label="Title" fullWidth onChange={(e) => setData({...kidstory, title:e.target.value})} />
            <input className="m-2 mb-3" variant="filled" type="file" fullWidth onChange={(e) => setData({...kidstory, img:e.target.value})} />
            <TextField className="m-2 mb-3" variant="outlined" type="text" multiline rows={7} label="Short Description" fullWidth onChange={(e) => setData({...kidstory, description:e.target.value})} />
            <label className="pl-2 text-bold"><h6>Long Descritption</h6></label>
            <Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={onEditorStateChange}
/>
            <Button variant="contained" className="bgColor text-light" type="submit">Apply</Button>
        </form>
        </Grid>
        <Grid item md={1}/>
        </Grid>
    )
}

export default Article
