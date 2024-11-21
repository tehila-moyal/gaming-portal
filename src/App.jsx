import { useState, useContext,useEffect} from 'react';

import { v4 as uuid } from 'uuid';
import { Route,Routes, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import UserContext from './contexts/userContext/UserContext';

import Header from './components/header/Header';
import UserList from './components/userList/UserList';
import AddUser from './components/AddUser/AddUser';
import NavbarBS from './components/navbar/Navbar';
import Prime from './components/games/Prime/Prime';
import Games from './components/games/Games';
import BinaryQuessing from './components/games/BinaryQuessing/BinaryQuessing.jsx'
import UserDetails from './components/userDetails/UserDetails.jsx';
import Login from './components/login/Login.jsx';
import justUserImg from './assets/images/user02.png';
import MathOlymp from './components/games/mathOlymp/MathOlymp.jsx';
import Trivia from './components/games/trivia/Trivia.jsx';
import Todo from './components/games/todo/Todo.jsx';
import Stopwatch from './components/games/stopwatch/Stopwatch.jsx';
import Chat from './components/Chat/Chat.jsx';
import Riddles from './components/games/Riddles/Riddles.jsx';
import ContectUs from './components/contectUs/ContectUs.jsx';

function App() {
  // let nodeEnv = process.env.NODE_ENV.toLowerCase();
  // console.log(nodeEnv);
  
  let hostingDir = '/tehila/projects/bullsAndCows';
  // let hostingDir = '/';

  const [users,setUsers]=useState(localStorage.getItem('bulls-and-cows-users') ? 
        JSON.parse(localStorage.getItem('bulls-and-cows-users'))
      :[
        { id: 77, fullName: 'Harleen Frances Quinzel', nick: 'Harley Quinn',
          email:'harley@gmail.com', phone: '555-5555', gender: 'f',role:'player',password:'123',pic:'https://api.dicebear.com/9.x/adventurer/svg?seed=12'},
        { id: 121, fullName: 'Joakin Phoenix', nick: 'Joker',
          email:'joker@gmail.com',  gender: 'm',role:'player',password:'123',pic:'https://api.dicebear.com/9.x/adventurer/svg?seed=162'},
        { id: 123, fullName: 'Bruce Wayne', nick: 'Batman',
          email:'bat@gmail.com', phone: '052-5381458', gender: 'nb',role:'player',password:'123',pic:'https://api.dicebear.com/9.x/adventurer/svg?seed=20'},
        { id: 111, fullName: 'Princess Diana of Thymiscira', nick: 'Wonder Woman',
            email:'gal.gadot@gmail.com', phone: '555-5558', gender: 'nb', role:'admin',password:'123',pic:'https://api.dicebear.com/9.x/adventurer/svg?seed=123'},
        { id: 1, fullName: 'x', nick: 'x',email:'x@x', phone: '00', gender: 'nb', role:'admin',password:'123',pic:'https://api.dicebear.com/9.x/adventurer/svg?seed=1202'}
      ])

      const [gamesList,setGamesList]=useState([
        // {name:'bulls and cows',link:'/games/BullsAndCows',explanation:'????????????',backgroundImg:'https://img.freepik.com/free-photo/cows-green-field-sunny-day_181624-42782.jpg?t=st=1720959276~exp=1720962876~hmac=61245481c1bce5341c8b1dc105f938e48c49cdef1ea0f66d45fa6da3c7b15423&w=996'},
        {name:'Math Olymp',link:`/games/MathOlymp`,explanation:'Earn points by solving math exercises',backgroundImg:'https://img.freepik.com/free-photo/symbol-time-cut-out-ideas-doodle_1134-1291.jpg?t=st=1720959081~exp=1720962681~hmac=79284c18bf35d8a84451f3c150617697aab1624f0e2f75107c6e9469e7fe2a77&w=900'},
        {name:'binary quessing',link:`/games/binaryquessing`,explanation:'Think of a number and the computer will try to find out your number or vice versa',backgroundImg:' https://img.freepik.com/free-vector/gradient-numerology-background_23-2150051037.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720915200&semt=ais_user'},
        {name:'trivia',link:`/games/trivia`,explanation:'trivia, you know what it is',backgroundImg:'https://t4.ftcdn.net/jpg/02/84/90/59/360_F_284905909_skjLeaDlVFakZBWZrwnj1udYV9zrMsM4.jpg'},
        {name:'Riddles',link:`/games/Riddles`,explanation:'Riddles, you know what it is',backgroundImg:'https://img.freepik.com/free-photo/words-papers-with-laptop-office_53876-123729.jpg?t=st=1721905285~exp=1721908885~hmac=b6b24834e30f7815bd1d0a5e9d9f1a4c575fe8a554e043c1e74497d3f1cae7c5&w=900'},
      ])
      

      const [toolsList,setToolsList]=useState([
        {name:'prime number checker',link:`/tools/prime`,explanation:'Enter a number and the computer will check if it is a prime number',backgroundImg:'https://img.freepik.com/free-vector/gradient-numerology-background_23-2150053341.jpg?t=st=1720958907~exp=1720962507~hmac=46b961ceba8daa14ec6b485c9175621e2d466549994d3c90357adabbe2b22b34&w=996'},
        {name:'todo list',link:`/tools/todo`,explanation:'Create a to-do list',backgroundImg:'https://img.freepik.com/free-vector/lovely-list-collection-with-flat-design_23-2147941298.jpg?t=st=1721292798~exp=1721296398~hmac=ef93e460342c26dc855195152734556d7d4e2747639fe3a35c0d22b994b30097&w=740'},
        {name:'Stopwatch',link:`/tools/stopwatch`,explanation:'Stopwatch',backgroundImg:'https://img.freepik.com/free-photo/top-view-wall-clocks-still-life_23-2150417291.jpg?t=st=1721567163~exp=1721570763~hmac=ebb02cb63e0376bb5352a8c25918b135b79dd023280595d662c89196779c64f8&w=996'},
      
      ])

      const lists=[
        {name:'games',link:`/games`,arr:gamesList},
        {name:`tools`,link:`/tools`,arr:toolsList}
      ]
      

      const [logdUser,setLogdUser]=useState(localStorage.getItem('bulls-and-cows-logdUser')?
                                            JSON.parse(localStorage.getItem('bulls-and-cows-logdUser')):{})
      const [pic,setPic]=useState([])
      let picUrl ='https://dog.ceo/api/breeds/image/random/10'
      //  'https://randomuser.me/api/?results=10&inc=gender,name,picture';

  
      function addUser(newUser) {
        
       if( users.some(element => element.nick===newUser.nick)){
        return false
       }else{
         const newUsers = users.concat({...newUser, id:uuid()})
         console.log(newUsers);
         setUsers(newUsers)
         localStorage.setItem('bulls-and-cows-users',JSON.stringify(newUsers))
         return true
       }
      }

      function removeUser(id){
        const newUsers = users.filter(u=>u.id !== id)
        setUsers(newUsers)
        localStorage.setItem('bulls-and-cows-users',JSON.stringify(newUsers))
      }

      function logout() {
        setLogdUser({})
        localStorage.removeItem('bulls-and-cows-logdUser')
      }

      useEffect(()=>{
        fetch(picUrl)
          .then(res=> res.json())
          .then(res=>{

            setPic(res.message)
          })
          .catch(err=>{console.log(err)})
      },[])

      const getRandomPic=()=>{
        console.log(pic);
        return pic.length>0?
        pic[Math.floor(Math.random()* pic.length)]:
        justUserImg;
      }

      function addpoints(num){
       
          const point=+logdUser.points>0?logdUser.points:0
          const newUsers = users.map(el => {
            if(el.id===logdUser.id){
             return{...el, points:point+num}
            }else{
              return el
            }
          });
          setUsers(newUsers)
          localStorage.setItem('bulls-and-cows-users',JSON.stringify(newUsers))
      
          const edit= {...logdUser, points:point+num}
          localStorage.setItem('bulls-and-cows-logdUser',JSON.stringify(edit))
      }

      function editUser(edit,admin){
        const newUsers = users.map(el => {
          if(el.id===edit.id){
            return edit
          }else{
            return el
          }
        });

        setUsers(newUsers)
        localStorage.setItem('bulls-and-cows-users',JSON.stringify(newUsers))
        if(!admin){
          setLogdUser(edit)
          localStorage.setItem('bulls-and-cows-logdUser',JSON.stringify(edit))

        }
      }
 
      // https://panda.knowledger.guru/tehila/projects/bullsAndCows/
      // https://panda.knowledger.guru/tehila/projects/bullsAndCows/community

  return (
    <UserContext.Provider value={{removeUser,logdUser,getRandomPic,editUser,addpoints,users}}>
      <NavbarBS logdUser={logdUser} logout={logout} getRandomPic={getRandomPic} lists={lists}/>
      <div className="App container pd-5">
        <div className='row gx-0 gy-3'>
          
      
        <Routes>
            <Route   path={`/`}
             element={logdUser.id===undefined?
            <Login setLogdUser={setLogdUser} users={users}/>:
            <p className="display-5">🕹️welcome back <span style={{color:'red'}}>{logdUser.nick}</span>!🎮</p>
            /*add home page*/
             }/>


          <Route path={`/community`} element={<>
            <Header title='👽The Community 👾' /> 
            {logdUser.id ===undefined?
            <p className="display-5">You do not have access to this content, this is members content only <Link to="/addUser">join us!</Link></p> :
            <Chat    storage={'bulls-and-cows-community-chat'}/>}
              </>      
          }/>
          



        <Route path={`/addUser`} element={<>
          <Header title='add user' /> 
          {logdUser.id ===undefined||logdUser.role ==='admin'?
              <AddUser add={addUser}>
              </AddUser>:
              <p className="display-5">You do not have access to this content, this is admins content only</p> }</>

        } />

        <Route path={`/userdetails`} element={
          logdUser.id ===undefined?
            <p className="display-5">You do not have access to this content, this is members content only <Link to="/addUser">join us!</Link></p> :
          <UserDetails editUser={editUser} logdUser={logdUser} check={false} setAdminEdit={setLogdUser}/>
        } />  

        <Route path={`/admin`}>
          <Route path='chat'element={<>
            <Header title='🤖admin chat🛠️ ' /> 
            {logdUser.role ==='admin'? <Chat storage={'bulls-and-cows-admin-chat'}></Chat>:
              <p className="display-5">You do not have access to this content, this is admins content only</p> }
          </>}/>

          <Route path={`userlist`} element={
              <UserList users={users} logdUser={logdUser} editUser={editUser} >
                <Header title='User List' /> 
              </UserList>
          } />
          
          
        </Route>


        <Route path={`/games`}>
          <Route index element={  <Games list={gamesList} btnText={'play!'}/>} />
            {/* <Route path='bullsandcows' element={<BullsAndCows/>  } />   */}
            <Route path='binaryquessing' element={<BinaryQuessing addpoints={addpoints}/>}/>     
            <Route path='matholymp' element={<MathOlymp addpoints={addpoints}/>}/> 
            <Route path='trivia' element={<Trivia addpoints={addpoints}/>}/>
            <Route path='Riddles' element={<Riddles/>}/>

        </Route>
         

        <Route path={`/tools`}>
          <Route index element={<Games list={toolsList} btnText={'try!'}/> } />
            <Route path='prime' element={<Prime/> } />
            <Route path='stopwatch' element={<Stopwatch/> } />
            <Route path='todo' element={
            <Todo logdUser={logdUser} users={users} setUsers={setUsers}/> }/> 
        </Route>
        

        <Route path={`/contectUs`} element={
          <>
            <ContectUs/>
            <h4 className='text-center mt-5'>This website was created by Tehila</h4>
          </>

        }/>
        
        <Route path='*' element={logdUser.id===undefined?
            <Login setLogdUser={setLogdUser} users={users}/>:
            <p className="display-5">🕹️welcome back <span style={{color:'red'}}>{logdUser.nick}</span>!🎮</p>
            /*add home page*/
             }/>

        </Routes>



        
      </div>
      
    </div>
    </UserContext.Provider>
  );
}

export default App;

/**
https://panda.knowledger.guru/tehila/projects/bullsAndCows/addUser
        http://localhost:3006/tehila/projects/bullsAndCows/addUser
 */