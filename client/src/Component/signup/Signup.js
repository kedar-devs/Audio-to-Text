import React,{useState} from 'react'

export default function Signup(props) {
    const [newUser,setUser]=useState({user:'',password:'',email:''})
    const submitter =()=>{
        console.log(newUser)
        props.history.push("Recorder")
    }
    return (
        <div>
            <form>
                <label>User Name</label>
                <input type="text" name="user" title="User Name" value={newUser.user} onChange={(e)=>{setUser({...newUser,[e.target.name]:e.target.value})}} />
                <label>Email</label>
                <input type="email" name="email" title="Email" value={newUser.email} onChange={(e)=>{setUser({...newUser,[e.target.name]:e.target.value})}} />
                <label>Password</label>
                <input type="password" name="password" title="Password" value={newUser.password} onChange={(e)=>{setUser({...newUser,[e.target.name]:e.target.value})}} />
                <button type="submit" onClick={submitter} title="Submit" /> 
                </form> 
        </div>
    )
}
