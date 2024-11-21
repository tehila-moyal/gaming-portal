 import React, { useState } from 'react'
 import Mode1 from './Mode1/Mode1'
 import Mode2 from './Mode2/Mode2'
 import './binaryQuessing.css'






 
 export default function BinaryQuessing() {
    const [mode,setMode]=useState()


    function restart(n) {
        setMode(n)
    } 



   return (

    <>
        <div className="d-flex flex-row justify-content-around">

            <button  type="button" className="btn m-3 btn-primary " onClick={()=>{setMode(1)}}>mode1</button>
            <button  type="button" className="btn m-3 btn-primary " onClick={()=>{setMode(2)}}>mode2</button>
            
        </div>
       
        {mode===1?<Mode1 restart={restart}/>:
         mode ===2?<Mode2 restart={restart}/>:
          <h2 className='mt-3'> 
            mode1: Machine is going to think about a number from 1 to 100,<br/>
            you should guess it<br/>
            mode2:We think about a number, the machine guesses
        </h2>
        }
            

        </>

    
   )
 }
 