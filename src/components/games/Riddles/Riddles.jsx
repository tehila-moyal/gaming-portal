import React,{useEffect,useState} from 'react'

export default function Riddles() {
    const [riddle,setRiddle]=useState([])
    const [showAnswer,setshowAnswer]=useState(false)
    const [newRiddle,setNewRiddle]=useState(0)


    
    useEffect(()=>{
        fetch(`https://riddles-api.vercel.app/random`)
            .then(res=> res.json())
            .then(res =>{
                setRiddle(res)
                setshowAnswer(false)
            })
            .catch(err=>console.log(err))


    },[newRiddle])


  return (
    <div className='d-flex flex-column align-items-center mt-5 offset-2 col-8'>
        <div className='text-center mt-5'>
            <h3>{riddle.riddle}</h3>
           {showAnswer&&<h5 className='text-success'>{riddle.answer}</h5>}

        </div>
        <button className='m-3 btn btn-info' onClick={()=>setshowAnswer(true)}>show Answer</button>
        <button className='btn btn-info' onClick={()=>{setNewRiddle(newRiddle+1)}}>new riddel</button>
    </div>
  )
}
