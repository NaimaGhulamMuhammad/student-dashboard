import React from 'react'
import Widget from "./Widget"

import SelectCourse from "./selectCourse"
import AddComplain from "./subcomponents/complains/addComplain"
import ViewComplain from "./subcomponents/complains/viewComplain"
import Assignment from "./subcomponents/assignment"
import AddStoryType from "./subcomponents/kidstory/addStoryType"
import KidStory from "./subcomponents/kidstory/kidstory"
import DashboardHome from "./dashboardHome"
import FeedBack from "./subcomponents/feedback"
import Test from "./subcomponents/test/viewTest";
import UploadedTest from "./subcomponents/test/viewUploadedTest"
import Announcement from "./subcomponents/announcment"
import Article from "./subcomponents/articles/article"
import AddArticleType from "./subcomponents/articles/addArticleType"
import Discussion from  "./subcomponents/discussion"
import Lecture from "./subcomponents/lecture"

import {
    Switch,
    Route
} from "react-router-dom"

function Main() {
    // Select Course
    const [course, setCourse] = React.useState('')
    const selectCourseHandle = (event) => {
        setCourse(event.target.value);
      };
    // Add Complain
    const [message, setComplain] = React.useState({id:0,msg:'',date:null})
    const submitComaplain = (data) => {
            data.preventDefault()
            alert( "data submitted Successfully")
            var date = new Date()
            var time = `${date.getDay()}/${date.getDate()}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
           setComplain((prevSt) => ({...message, id:prevSt.id+1,date:time}))
    }
    const handleComplainChange = (e)=>{setComplain({...message, msg:e.target.value})}
    // Add story Type
    const [storyType, setStoryType] = React.useState({type:''})
    const handleAddType = (event) => {setStoryType({...storyType, type: event.target.value})}

    return (
        <>
        {course !== ''?
                <Switch>
                    <Route  exact from="/" render={props => <DashboardHome {...props} />}/>
                    <Route  exact path='/viewAssignment' render={props => <Assignment {...props} course={course} handleChange={selectCourseHandle}/>}/>
                    <Route  exact path="/addComplain" render={props => <AddComplain {...props} handleSubmit={submitComaplain} handleChange={handleComplainChange}/>}/>
                    <Route  exact path="/viewComplain" render={props => <ViewComplain {...props} complain={message}/>}/>
                    <Route  exact path="/discussion" render={props => <Discussion {...props}/>}/>
                    <Route  exact path="/viewTest" render={props => <Test {...props}/>}/>
                    <Route  exact path="/viewUploadedTest" render={props => <UploadedTest {...props}/>}/>
                    <Route  exact path="/kidstory" render={props => <KidStory {...props} type={storyType}/>} />
                    <Route  exact path="/kidStoryType" render={props => <AddStoryType {...props} handleChange={handleAddType}/>}/>
                    <Route  exact path="/articles" render={props => <Article {...props}/>}/>
                    <Route  exact path="/articlesType" render={props => <AddArticleType {...props}/>}/>
                    <Route  exact path="/announcement" render={props => <Announcement {...props}/>}/>
                    <Route  exact path="/Feedback" render={props => <FeedBack {...props}/>}/>
                    <Route  exact path="/lectures" render={props => <Lecture {...props}/>}/>
                </Switch>               
    :
                <Switch>
                    <Route  exact from="/" render={props => <DashboardHome {...props} />}/>
                    <Route  exact path='/viewAssignment' render={props => <SelectCourse {...props} course={course} handleChange={selectCourseHandle}/>}/>
                    <Route  exact path="/addComplain" render={props => <AddComplain {...props} handleSubmit={submitComaplain} handleChange={handleComplainChange}/>}/>
                    <Route  exact path="/viewComplain" render={props => <ViewComplain {...props} complain={message}/>}/>
                    <Route  exact path="/discussion" render={props => <SelectCourse {...props} course={course} handleChange={selectCourseHandle}/>}/>
                    <Route  exact path="/viewTest" render={props => <SelectCourse {...props} course={course} handleChange={selectCourseHandle}/>}/>
                    <Route  exact path="/viewUploadedTest" render={props => <SelectCourse {...props} course={course} handleChange={selectCourseHandle}/>}/>
                    <Route  exact path="/kidstory" render={props => <KidStory {...props} type={storyType}/>}/>
                    <Route  exact path="/kidStoryType" render={props => <AddStoryType {...props} handleChange={handleAddType}/>}/>
                    <Route  exact path="/articles" render={props => <Article {...props}/>}/>
                    <Route  exact path="/articlesType" render={props => <AddArticleType {...props}/>}/>
                    <Route  exact path="/announcement" render={props => <Announcement {...props}/>}/>
                    <Route  exact path="/Feedback" render={props => <FeedBack {...props}/>}/>
                    <Route  exact path="/lectures" render={props => <SelectCourse {...props} course={course} handleChange={selectCourseHandle}/>}/>
                </Switch>
        }
        </>
    )
}

export default Main
