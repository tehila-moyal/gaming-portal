import React from 'react'
import { useState, useEffect } from 'react';
import './UserDetalis.scss'

/**
 * set admin edit:
 * מקבל מהצק אם זה משתמש שמעדכן את הפרטים שלו או 
 * אדמין שמעדכן פרטי משתמש אחר 
 * אדמין אדיט נותן את ה ID 
 * 
 */

export default function UserDetails({editUser,logdUser,check,setAdminEdit}) {
  const [formData,setFormData] = useState(logdUser);

  const [pic,setPic]=useState([])
  const [save,setsave]=useState(false)

  function randomPic() {
    let arr=[]
    for (let i = 0; i < 12; i++) {
      
      arr.push(`https://api.dicebear.com/9.x/adventurer/svg?seed=${Math.floor(Math.random()*i*5)}`)
     
    }
    console.log(arr);
    setPic(arr)
  }
  
  useEffect(()=>{
    randomPic()

  },[])
  const handleChange = e =>
    e.target.value !== undefined?
     setFormData({...formData,[e.target.name]: e.target.value}):
     setFormData({...formData,[e.target.name]: e.target.src});

  function onSubmit(e) {

    e.preventDefault();

    editUser(formData,check);
    setsave(true)
    setTimeout(() => {
      setsave(false)
    }, 5000);
    if(check){
      setAdminEdit('')
    }
    document.documentElement.scrollTop = 0

    


  }
//  text-center border-primary 
// img-thumbnail
    return ( 
    <div className="UserDetalis addUser pt-3 justify-content-md-center" >
      {save&&<h2 className='text-primary'>The changes have been saved!</h2>}
      <form className="fs-3 col container row justify-content-evenly" onSubmit={onSubmit}    >
        <div className='col-6 '>


            <div className="form-group row mb-2 mt-5">
              <label className="col-form-label col-12 col-lg-3 mt-5" htmlFor="fullName">Name:</label>
              <div className="col-12 offset-0 col-lg-8 offset-lg-1 mt-5">
                <input className="form-control fs-3" type="text" name="fullName" id="fullName" placeholder={formData.fullName}
                      required onChange={handleChange} value={formData.fullName}  />
                <div className="invalid-feedback">You should enter a full name!</div>
              </div>
            </div>

            <div className="form-group row mb-2">
              <label className="col-form-label col-12 col-lg-3" htmlFor="email">Email:</label>
              <div className="col-12 col-lg-8 offset-lg-1">
                <input className="form-control fs-3" type="email" name="email" id="email" 
                      required   onChange={handleChange}     value={formData.email}              />
                <div className="invalid-feedback">You should enter a valid email!</div>
              </div>
            </div>
            
            <div className="form-group row mb-2">
              <label className="col-form-label col-12 col-lg-3" htmlFor="nick">Nick:</label>
              <div className="col-12 col-lg-8 offset-lg-1" >
                <input className="form-control fs-3" type="text" name="nick" id="nick"
                           required  onChange={handleChange}  value={formData.nick} />
                <div className="invalid-feedback">You should supply a nickname!</div>
              </div>
            </div>
            
            <div className="form-group row mb-2">
              <label className="col-form-label col-12 col-lg-3" htmlFor="fullName">points:</label>
              <div className="col-12 offset-0 col-lg-8 offset-lg-1 ">
                  <div className="form-control fs-3" type="text" name="points" id="points" >{formData.points?formData.points:0} </div>
              </div>
            </div>

            <div className="form-group row mb-2">
              <label className="col-form-label col-12 col-lg-3" htmlFor="phone">Phone:</label>
              <div className="col-12 col-lg-8 offset-lg-1">
                <input className="form-control fs-2" type="tel" name="phone" id="phone"
                          onChange={handleChange}  value={formData.phone} />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-12 col-lg-3" htmlFor="gender">Gender:</label>
              <div className="col-12 col-lg-8 offset-lg-1">
                  <select className="form-control fs-4" name="gender" id="gender"
                             onChange={handleChange}  value={formData.gender}>
                    <option value="">-- Choose gender --</option>
                    <option value="f">Female</option>
                    <option value="m">Male</option>
                    <option value="nb">Not telling ya</option>
                  </select>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-12 col-lg-3" htmlFor="role">Role:</label>
              <div className="col-12 col-lg-8 offset-lg-1">
                  <select className="form-control fs-4" name="role" id="role" required
                           onChange={handleChange}  value={formData.role} >
                    <option value="">-- Choose role --</option>
                    <option value="admin">Admin</option>
                    <option value="player">Player</option>

                  </select>
              </div>
            </div>

            <div className="form-group row mb-2">
              <label className="col-form-label col-12 col-lg-3" htmlFor="password">password:</label>
              <div className="col-12 col-lg-8 offset-lg-1">
                <input className="form-control fs-2" type="password" name="password" id="password"
                          onChange={handleChange}  value={formData.password} />
              </div>
            </div>

        </div>
            

            <div className='col-6 d-flex flex-column align-items-center justify-content-between'>
              <img src={formData.pic} alt="user pic" className=" userImg"/> 
              <div className='d-flax'>
                <label className="col-form-label col-12 " htmlFor="pic">Choose user pic:</label>
                <div className='bd-example d-flax'>
                {pic.map((el,inx)=>{
                  return <button key={inx} type='button' name='pic' value={el} onClick={handleChange} className='btn btn-outline-success m-3'>
                  <img name='pic' onClick={handleChange} src={el}/></button>
                })}
              </div>
            </div>


            </div>
            

            <div className="d-grid col-md-3 ml-md-auto">
              <button type='submit' className="btn btn-outline-info btn-lg fs-1 px-5 mt-4 shadow mb-2 p-3 ">edit</button>
            </div>

      </form>


    </div>
  )
}
