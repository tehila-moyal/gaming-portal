import { useContext, useState } from "react"
import UserContext from "../../../../contexts/userContext/UserContext"
export default function Mode1({restart}) {
    const {addpoints}=useContext(UserContext)
    const [out,setOut]=useState('')
    const [btn,setbtn]=useState(false)
    const [scorDiv,setscorDiv]=useState(7)
    const [userGuss,setUserGuss]=useState('')
    let  rendomNum = Math.floor(Math.random()*101);
    const [guss,setGuss]=useState(rendomNum)


    function restartLevel() {
        setOut('')
        setbtn(false)
        setscorDiv(7)
        rendomNum = Math.floor(Math.random()*101);
        setGuss(rendomNum)
        setUserGuss('')
        restart(0)
        
    }



    function checkValid() {
        if (+userGuss!==Math.floor(+userGuss)) {
            setOut("you didnt enter an Integer")
            return false
        } else if (+userGuss===""){
            setOut("you didnt enter a number")
    
            return false
    
        } else if (+userGuss<=0||+userGuss>100){
            setOut("you need a number from 1 to 100")
    
            return false
            
        }
        setOut("")
        console.log(guss);
    
        return true
    
    }

    

    function checkGuess(){
        const userValue = parseInt(userGuss);
        if (checkValid()) {
        if(userValue === guss){
            setOut("Congratulations, you guessed it!")
            addpoints(scorDiv)
            setbtn(true)
            
            // } else if ( userValue < guss) {
            //     setOut( "Too low! Try again.")
            //     setscorDiv(scorDiv-1)
            // }else {
            // setOut("Too high! Try again.")
            // setscorDiv(scorDiv-1)
        } else if ( userValue < guss) {
            setOut( "נמוך ,תנחש גבוהה יותר")
            setscorDiv(scorDiv-1)
        }else {
        setOut("גבוה, תנחש נמוך יותר")
        setscorDiv(scorDiv-1)
    
            }
        
        }
    
        if(scorDiv === 1){
            setOut("Game over! You have run out of guesses.")
            setbtn(true)

        }
    
    }

 



  return (
    <div className='mainDiv'>
        
        <button  type="button" className="btn btn-light m-3 " onClick={restartLevel}>restart</button>
        <input className="mt-1 input-group-text" type='number' value={userGuss} onChange={(e)=>{setUserGuss(e.target.value) }}/>
        <button  type="button" className="btn btn-warning m-3 " disabled={btn} onClick={checkGuess}>check your guss</button>
        {out}
        <div> Number of trials:{scorDiv} guess left</div>
    </div>
  )
}
