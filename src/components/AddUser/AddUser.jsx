import { useNavigate } from 'react-router-dom';
import {useState,useEffect,useRef} from 'react';

export default function AddUser({children, add}) {
  const navigate=useNavigate()
  const existingUser = useRef(null);

  const [pic,setPic]=useState([])
  let picUrl ='https://api.dicebear.com/9.x/adventurer/svg?seed='

  function randomPic() {
    let arr=[]
    for (let i = 0; i < 12; i++) {
      
      arr.push(`https://api.dicebear.com/9.x/adventurer/svg?seed=${Math.floor(Math.random()*i*5)}`)
    }
    setPic(arr)
  }
  
  useEffect(()=>{
    randomPic()

  },[])




  const [formData,setFormData] = useState( {fullName: '', nick: '',
    email:'', phone: '', gender: '',role:'',password:''});

  const handleChange = e =>{
    e.target.value===undefined?
    setFormData({...formData, [e.target.name]: e.target.src}):
    setFormData({...formData,[e.target.name]: e.target.value})

    };

  function onSubmit(e) {


    e.preventDefault();

    e.target.classList.add('was-validated');
    
    if(e.target.checkValidity()){
      if(add(formData)){
        setFormData( {fullName: '', nick: '',
          email:'', phone: '', gender: '',role:''});
        existingUser.current.classList.replace('opacity-100','opacity-0')
        e.target.classList.remove('was-validated');

  
        navigate('/')
      }else{
        existingUser.current.classList.replace('opacity-0','opacity-100')
      }
    }
  }


    return (
      <div className=" border-primary px-5 addUser order-0 order-sm-1 col-lg-8  offset-lg-2">
          
        {children}
          <form className="fs-3" onSubmit={onSubmit}  noValidate >
          
            <div className="form-group row">
                <div className="opacity-0 text-danger" ref={existingUser}  >
                    The nickname already exists!
                </div>
            </div>

            <div className="form-group row mb-2">
              <label className="col-form-label col-12 col-lg-3" htmlFor="fullName">Name:</label>
              <div className="col-12 offset-0 col-lg-8 offset-lg-1">

                  <input className="form-control fs-3" type="text" name="fullName" id="fullName" 
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
                          onChange={handleChange}  value={formData.password} required />

              </div>
              </div>
            <div className='d-flax'>
            <label className="col-form-label col-12 col-lg-3" htmlFor="pic">user pic:</label>
            <div className='bd-example d-flax'>

              {pic.map((el,inx)=>{
                return <button key={inx} type='button' name='pic' value={el} onClick={handleChange} className='btn btn-outline-success m-3'>
                  <img name='pic' onClick={handleChange} src={el}/></button>

              })}
            </div>

            </div>
            <div className="d-grid">

                <button className="btn btn-outline-info btn-lg fs-1 px-5 mt-4 shadow mb-2 p-3" type='submit'>
                            Add</button>
            </div>
          </form>
      </div>
    )
  }