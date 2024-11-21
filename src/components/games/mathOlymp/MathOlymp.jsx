import { useState } from 'react';
import './MathOlymp.css';
import { useNavigate } from 'react-router-dom';


export default function MathOlymp({addpoints}) {
  const [score,setScore]=useState(0)
  const [inp,setInp]=useState(0)
  const [level,setLevel]=useState(0)
  const [btnDisabled,setbtnDisabled]=useState(false)
  const [exercises,setExercises]=useState([])
  const navigate=useNavigate()
  
  let levCheck=0
  const scoreToLevel = [1,2,4,8,16,32,64,128];
  const actions = ['-','+'];

  function saveAndExit() {

    addpoints(score)
    navigate('/')

    
  }

  function checkAns(ans,btn) {
    if (ans===+inp) {
      setInp(0)
      btn.classList.remove("bg-danger")
      setExercises( exercises.filter(el =>el.ans!==ans))
      levCheck+=1
      if(levCheck===1){
        setLevel(level+1)
        levCheck=0
      }
      setScore(score+scoreToLevel[level])
      


      
    }else{
      btn.classList.add("bg-danger");
      if (score===0) {
        if (level>0){

          setLevel(level-1)
        }
        
      }else if (score-scoreToLevel[level]<0) {
        setScore(0)
      }else(
        setScore(score-scoreToLevel[level]/2)
      )
      setTimeout(() => {
        btn.classList.remove("bg-danger")

        
      }, 1000);
    } 
    if(exercises.length===1){
      setbtnDisabled(false)
    }


    
  }

  function randomNam(n) {
    return Math.floor(Math.random()*n)
  } 
  

  function createExercises() {
    let arr=[]
    for (let i = 0; i < 10; i++) {
      let num1X=randomNam(11+level)
      let num2X=randomNam(11+level)
      let actX=actions[randomNam(actions.length)]
      arr.push({
        targil:`${num1X}${actX}${num2X}`,
        ans:actX==='-'?num1X-num2X:num1X+num2X,
      })
    }
    setExercises(arr) 
    setbtnDisabled(true)

  }

  return (
    <div className="math-olymp">
      <h2 className="text-primary">Score:{score} , Level: {level}</h2>

      <div className="row d-grid exGrid fs-3 text-warning">

          {exercises.length !=0 ?exercises.map((el,index)=>{
            return(                
              <div className="form-group row mb-2" key={index}>
                      <label htmlFor={index} className="col-form-label h2 text-primary col-3">
                        {el.targil}
                      </label>
                      <div className="col-2">
                        <input type="number" id={index} className="form-control col-3" onChange={(e)=>{setInp(e.target.value)}}/>
                      </div>
                      <button id={index}  onClick={(e)=>{checkAns(el.ans,e.target)}} className="btn btn-outline-primary ml-2 col-2 fs-6">
                          Is It Right?</button>
                </div> )
            }):level>0?
            <h5 className='h5'>Click the button to show the exercises and get more points or save the points and exit <br/> <button onClick={saveAndExit} className='btn btn-outline-danger mt-2'>save&exit</button> </h5>:
            <h5 className='h5'>Click the button to show the exercises</h5>}


      </div>
      <button disabled={btnDisabled} className="btn btn-primary" onClick={createExercises}>
                Show Exercises!
      </button>
    </div>
  )
}
