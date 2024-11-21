import React, { useState,useEffect } from 'react'
import './Stopwatch.scss'
export default function Stopwatch() {
    const [time,setTime]=useState(0)
    const [isRunning, setIsRunning] = useState(false);
    const [laps,setLaps]=useState([])

    function resetTime(){
        setTime(0)
        clearInterval(intervalid)
        setLaps([])

    }
    let intervalid

    useEffect(() => {
        if(isRunning){

            intervalid=setInterval(() => {
                setTime(prev=>prev+1)
        
                
            },10 );
        }
      return () => {
         clearInterval(intervalid)
      }
    }, [isRunning,time])
    
    function out() {
        let out=time/100
        return out
        
    }
    function addLap() {
        if (time!==0){

            setLaps([...laps,time/100])
            console.log(laps);
        }
    }


  return (
    <div className='d-flax  mt-2' >
        <h1 className='text-center'>{out()}</h1>
        <div  className='text-center d-flex justify-content-around'>

            <button className='btn btn-success ' onClick={()=>setIsRunning(true)}>{time===0?'start':'continue'}</button>
            <button className='btn btn-danger' onClick={()=>setIsRunning(false)}>stop</button>
            <button className='btn btn-primary' onClick={()=>addLap()}>lape</button>
            <button className='btn btn-info' onClick={resetTime}>reset</button>
        </div>
        {laps.length>0&&
            <ul className='col-8 mt-3'>
                <h3>laps</h3>

                {laps.map((lap,inx)=>{
                    return <li className='lap' key={inx}>{lap}</li>
                })}
            </ul>}


    </div>
  )
}
