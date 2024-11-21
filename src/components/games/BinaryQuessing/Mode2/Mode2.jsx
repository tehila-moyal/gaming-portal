import React, { useState } from 'react'

let min =1 
let max=100 
let center =50
let numOfGuess2=1;


export default function Mode2({restart}) {
    const [gues,setGues]=useState(50)
    const [out,setout]=useState('')
    const [btn,setbtn]=useState(false)

    // const [min,setmin]=useState(1)
    // const [max,setmax]=useState(100)
    // const [center,setcenter]=useState(50)
    // const [numOfGuess2,setnumOfGuess2]=useState(1)

        

    function restartLevel() {
        min =1 
        max=100 
        center =50
        numOfGuess2=1;

        // setmin(1)
        // setmax(100)
        // setcenter(50)
        // setnumOfGuess2(1)


        restart(0)
        
    }


    const greater=()=>{
        console.log("nim",min,"max",max,"center",center);

        // setmin(center+1)
        // setcenter(Math.floor((min+max)/2)); 
        // setnumOfGuess2(numOfGuess2+1);

        
        min=center+1;
        numOfGuess2++;
        center=Math.floor((min+max)/2); 


        setGues(center)
        console.log("out  nim",min,"max",max,"center",center);


    }

    const smaller=()=>{
        console.log("min",min,"max",max,"center",center);

        max=center-1;
        center=Math.floor((min+max)/2);
        numOfGuess2++;

        // setmax(center-1);
        // setcenter(Math.floor((min+max)/2));
        // setnumOfGuess2(numOfGuess2+1);
        
        setGues(center);
        console.log("out  nim",min,"max",max,"center",center);


    }
    const win=()=>{

        setout(`We got your number in ${numOfGuess2} guesses! `)
        setbtn(true)

    }


  return (<div className='mainDiv lead display-6'>
        <button  type="button" className="btn btn-light m-3 " onClick={restartLevel}>restart</button>
        <span>is this your number?</span>{gues}<br/>
        <span>{out}</span>
        <button  type="button" className="btn btn-danger m-3 " onClick={greater} disabled={btn}> my number is greater</button>
        <button  type="button" className="btn btn-danger m-3 " onClick={smaller} disabled={btn}> my number is smaller</button>
        <button  type="button" className="btn btn-success m-3 " onClick={win} disabled={btn}>  you've got it!</button>
  </div>

  )
}

{/* */}