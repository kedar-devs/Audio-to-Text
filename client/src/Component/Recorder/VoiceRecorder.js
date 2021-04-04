import React,{useState,useEffect} from 'react'
import {Recorder} from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'
export default function VoiceRecorder(props){
    const [recording,setRecord]=useState({
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      })
      const handleAudioStop=(data)=>{
        console.log(data)
        setRecord(data)
    }
      const handleAudioUpload=(file)=>{
        console.log(file);
    }
      const handleRest=()=>{
        const reset = {
          url: null,
          blob: null,
          chunks: null,
          duration: {
            h: 0,
            m: 0,
            s: 0
          }
        };
        setRecord(reset)
      }
      
    return(
        <div>
            <Recorder
            record={true}
            title={"New recording"}
            audioURL={recording.url}
            showUIAudio
             handleAudioStop={data => handleAudioStop(data)}
            handleAudioUpload={data => handleAudioUpload(data)}
            handleRest={() => handleRest()} 
    />
        </div>
    )
}