import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './../Home/Home'
import Login from '../Login/Login'
import Signup from './../signup/Signup'
import Recorder from '../Recorder/VoiceRecorder'
function AppRouter() {
    return (
        <div>
            <Router>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/Sign-Up" exact component={Signup}></Route>
                <Route path="/Recorder" exact component={Recorder}></Route>
            </Router>
        </div>
    )
}

export default AppRouter
