import React from 'react'

export default function Home(props) {
    const buttonPressed=()=>{
        if(localStorage.getItem("token")){
            props.history.push("recorder")
        }
        else{
            props.history.push("login")
        }
    }
    return (
        <div>
            <button onClick={()=>buttonPressed()}>
                go to recorder
            </button>
            
        </div>
    )
}
