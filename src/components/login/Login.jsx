import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import { useState} from 'react';



export default function Login({setLogdUser,users}) {
    const [logcheck,setLogcheck]=useState({nick:'',password:""})
    const [out,setOut]=useState("")

    const handleChange = e => setLogcheck({...logcheck,
        [e.target.name]: e.target.value});
    
    function userLogd(e) {
         e.preventDefault();
        //  console.log(users);

        const test=users.filter(el=>el.nick === logcheck.nick)
        if(test.length===0){
            setOut("user dosnt exsist")
            
        }else if (test[0].password != logcheck.password){
            // console.log(test);
            // console.log(logcheck);
            // console.log(test[0].password);
            setOut("worng password")

          
        }else{
          setLogdUser(test[0])
        localStorage.setItem('bulls-and-cows-logdUser',JSON.stringify(test[0]))

          
          setLogcheck({nick:'',password:""})
          setOut('🎮go play!🕹️')

        }

      }

  return (
    <div className=" border-primary px-5 addUser order-0 order-sm-1 col-lg-8  offset-lg-2">
            <Header title={"log in"}/>
              <Link to='/addUser'><h3>if you'er not a user sigh up here</h3></Link>
              <form onSubmit={userLogd}>
                <div className="form-group row mb-2">
              <label className="col-form-label col-12 col-lg-3" htmlFor="nick">nickname:</label>
              <div className="col-12 offset-0 col-lg-8 offset-lg-1">

                  <input className="form-control fs-3" type="text" name="nick" id="nick" 
                        required onChange={handleChange} value={logcheck.nick}  />


                  <div className="invalid-feedback">You should enter a full name!</div>
              </div>
            
            </div>
            <div className="form-group row mb-2">
              <label className="col-form-label col-12 col-lg-3" htmlFor="password">password:</label>
              <div className="col-12 col-lg-8 offset-lg-1">

                  <input className="form-control fs-3" type="password" name="password" id="password" 
                           required   onChange={handleChange}     value={logcheck.password}              />

                  <div className="invalid-feedback">You should enter a valid email!</div>
              </div>
            </div>
                <div className="d-grid">    
                 <button className="btn btn-outline-info btn-lg fs-1 px-5 mt-4 shadow mb-2 p-3">enter</button>
                 </div>

              </form>
                <h2>{out}</h2>
    </div>
  )
}
