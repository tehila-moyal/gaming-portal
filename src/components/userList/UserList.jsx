import './UserList.scss'
import UserCard from '../userCard/UserCard'
import UserDetails from '../userDetails/UserDetails';
import { useState } from 'react';




export default function UserList({users,children,logdUser,editUser}) {
  const [adminEdit,setAdminEdit]=useState()

  return (

    <div className='col-12 col-sm-6 col-md-7 col-lg-8  offset-lg-1'>
      {children}
      {logdUser.role==='admin'?
        <ul>
            {users.length !==0 ? 
                users.map(el=> <UserCard key={el.id} user={el} setAdminEdit={setAdminEdit}/>)
                :<p className="display-5">This is a sociopatic game: no users</p>}
            

        </ul>:<p className="display-5">You do not have access to this content, this is admins content only</p>}
        {adminEdit&&<UserDetails editUser={editUser} logdUser={adminEdit} check={true} setAdminEdit={setAdminEdit}/>}
    </div>
  )
}
