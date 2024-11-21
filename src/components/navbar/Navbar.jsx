import './Navbar.scss'
import { Link,useNavigate } from 'react-router-dom'
import justUserImg from '../../assets/images/user02.png';
import logo2 from '../../assets/images/logo2.png'
import { useEffect, useState } from 'react';

import { Button,NavDropdown, Navbar,Nav,Container } from 'react-bootstrap';


export default function NavbarBS({logdUser,logout,getRandomPic,lists}) {
  const hostingDir='/tehila/projects/bullsAndCows'

  const [adminContent,setAdminContent]=useState('disadled')
  useEffect(()=>{
    setAdminContent(logdUser.role==='admin'?'':'disadled')
  },[])
    const navigate=useNavigate()

  return ( <>   
    <Navbar style={{fontSize:'1.6rem'}} expand="lg" bg="light" data-bs-theme="light">
    {/* <Container> */}
      <Navbar.Brand ><div><Link to={'/games'}><img src={logo2} className='logo'/></Link> </div></Navbar.Brand>
        <br/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">      
          {logdUser.role==='admin'&&<NavDropdown title="admin content" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to={'/addUser'}> add user</Link></NavDropdown.Item>
              <NavDropdown.Item > <Link to={`/admin/userlist`}>user list</Link></NavDropdown.Item>
              <NavDropdown.Divider/><NavDropdown.Item > <Link to={`/admin/chat`}>admin chat</Link></NavDropdown.Item>
            </NavDropdown>}
                
          {lists.map((main,index)=>{
            return <NavDropdown key={index} title={main.name} id="basic-nav-dropdown">
                      <NavDropdown.Item><Link to={main.link}> all {main.name}</Link></NavDropdown.Item><NavDropdown.Divider />
                      {main.arr.map((el,inx)=>{
                                return <NavDropdown.Item key={inx}><Link to={el.link}> {el.name}</Link></NavDropdown.Item>})}        
                      </NavDropdown>})
          }

          <Nav.Link><Link to={"/community"}> community</Link></Nav.Link>
          <Nav.Link ><Link to={"/contectUs"}> Contect us</Link></Nav.Link>
        </Nav>
        {logdUser.id===undefined&& <Link  className="m-2 btn btn-outline-success m-1" 
          aria-current="page" to={`/adduser`}>sigh up</Link> }
          
        <Link className="m-2" aria-current="page" to={`/`}> 
          {logdUser.id?
            <button className='btn btn-outline-success m-1' onClick={logout}>logout</button>:
           <button className=' btn btn-outline-success m-1'>login</button>}
         </Link> 
              
       
      </Navbar.Collapse>
    <Navbar.Brand> <Link to={'/userdetails'}> <div><img src={!logdUser.id ? justUserImg :
                                     logdUser.pic !==undefined?
                                     logdUser.pic:
                                     getRandomPic()} alt="user pic" className='profpic'/></div></Link></Navbar.Brand>
    {/* </Container> */}
    </Navbar>
  
  </>
)}

