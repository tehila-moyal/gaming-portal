import React, { useContext, useState } from 'react'
import UserContext from '../../../../contexts/userContext/UserContext'


export default function Question({set,name,bgimg,setChosennSet,}) {
  const [qnum,setqnum]=useState(0)
  const [point,setPoint]=useState(0)
  const{addpoints}=useContext(UserContext)

  function nextQuestion() {
    // set.length-1!==qnum?setqnum(qnum+1):setqnum(0)
    setqnum((prev)=>{return prev+1})
    console.log(qnum);
  }
  function prevQuestion() {
    qnum!==0?setqnum(qnum-1):setqnum(0)
  }
 

  const arr=[]
  function remixarr(n) {
    if(arr.length===n){
      return
    }
    let ramdom=Math.floor(Math.random()*n)
    if (arr.includes(ramdom)){
      remixarr(n)
    
    }else{
      arr.push(ramdom)
      remixarr(n)
    }
  }
  remixarr(4)

  function checkQ(x) {

    if(set[qnum].rightAnswer==x.name){
      x.classList.replace('btn-warning','btn-success')
      setTimeout(() => {
        
        setPoint(point+1)
        x.classList.replace('btn-success','btn-warning')
        nextQuestion()
      }, 1000);

    }else{
      x.classList.replace('btn-warning','btn-danger')
      if (point>0){

        setPoint(point-1)
      }

      setTimeout(() => {
        
        x.classList.replace('btn-danger','btn-warning')
      }, 500);
    }


    
  }

  function endgame() {
    setChosennSet(undefined)
    addpoints(point)
    setPoint(0)
   
    
  }

  return (
    <div className='text-center  offset-lg-2 col-lg-8'>
      <h1 >{name}</h1>
      <h3 className='mb-'>points:{point}</h3>
      {set.length>qnum?
       <div className=" border-primary px-5 addUser order-0 order-sm-1 card text-center mb-3"style={{widt: '18rem',backgroundImage: `url('${bgimg}')`, textShadow:'none'}}>
        <div className="card-body d-flex flex-column">
          <h4 className="card-title " style={{textShadow:'none'}}>{set[qnum].question}</h4>
          {arr.map((el,inx)=>{
            return <button key={inx} onClick={(e)=>{checkQ(e.currentTarget)}} className='btn m-3 btn-warning' name={`${arr[el]}`} >{set[qnum].answers[arr[el]]}</button>

          })}

          <div>
            {/* <button className='btn m-3 btn-info' onClick={prevQuestion} >prev</button> */}
            <button className='btn m-3 btn-info' onClick={nextQuestion} >skip</button>
          </div>
        </div>
      </div>:
         <div className='card-body d-flex flex-column'>
          game over 
          you arnd {point}
          points!
          <button onClick={endgame} className='btn m-3 btn-info'>end game</button>
          </div>} 
    </div>
  )
}
// align-items-cente