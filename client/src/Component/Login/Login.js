import React,{useState} from 'react'
import {Link} from 'react-router-dom'
export default function Login(props) {
    const [creds,setcreds]=useState({email: '',password: '',})
    const submitter=()=>{
        console.log(creds)
        props.history.push("Recorder")
    }
    return (
        <div>
            <form>
                <label>Email</label>
                <input type="text" title="Email" name="email" placeholder="abc@email.com" value={creds.email} onChange={(e)=>{setcreds({...creds,[e.target.name]:e.target.value})}} />
                <label>Password</label>
                <input type="password" title="Password" name="password" placeholder="min 8 character" value={creds.password} onChange={(e)=>{setcreds({...creds,[e.target.name]:e.target.value})}} />
                <button onClick={()=>submitter()} type="submit" >Submit</button>
            </form>
            <p>if you want to create account</p>
            <Link to="/Sign-Up">click here</Link>
        </div>
    )
}
