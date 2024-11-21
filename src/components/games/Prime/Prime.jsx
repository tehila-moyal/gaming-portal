
import React from "react";
import { useState } from "react";
import './prime.scss'



function Prime() {
  const [primeOut, setPrimeOut]=useState();
  const [primeNum, setPrimeNum]=useState();


function checkIfPrime() {
  

  let testOut=""

    if (primeNum==="") {
        testOut= "You didn't write anything"
        return   testOut
        
    }
    
    let n = Number(primeNum);
    if (n===2){
        testOut= 'prime'
        return   testOut
    }
    if (n!== Math.floor(n)) {
        testOut= "You didn't write a whole number"
        return   testOut
    }
    if (n<2||n%2===0){
        testOut= 'Not prime'
        return   testOut
    }
    

    for(let i = 3; i <= Math.sqrt(n); i += 2) {
        

        if (n % i === 0) {
            testOut=  'Not prime'
            return testOut
        }
    
       }
       testOut='prime' 
       return testOut
    
}


  function out() {

    setPrimeOut(checkIfPrime() )
    
  }




  return(

   

    <div className="primeBox"> 
        <p>enter a number to chcek if it is a prime number</p>
        <input type="number" onChange={(e)=>{setPrimeNum(e.target.value)}}/>
        <button className="btn m-3 btn-primary" onClick={out} > check </button>
        {primeOut==='prime'?
        <div className="out text-success">{primeOut}</div>:
        <div className="out text-danger">{primeOut}</div>}


    </div>
   

  );
  
}
export default Prime;