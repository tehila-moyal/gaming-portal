
import femaleImg from '../../assets/images/cartoon-character-with-fashion-bag_71767-98.jpg';
import nbImg from '../../assets/images/cartoon-character-with-handbag-sunglasses.jpg' 
import maleImg from '../../assets/images/fashion-little-boy.jpg';
import justUserImg from '../../assets/images/user02.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// import {faTrashCan} from '@fortawesome/free-regular-svg-icons'

import { useContext } from 'react';
import UserContext from '../../contexts/userContext/UserContext';


export default function UserCard({user,setAdminEdit}) {
    const {removeUser,getRandomPic}=useContext(UserContext)
    

  const { fullName, email, role,pic } = user;

  let imgSrc = !user.pic ? getRandomPic() :pic ;

  return (
    
    <li className="card mb-2">
        
        <div className="row">

            <div className="col-4">
                <img src={imgSrc} className="img-fluid rounded-start" alt="user_img" />
            </div>
            <div className="col-6 card-body">
                <h5 className="card-title">{fullName}</h5>
                <p className="card-text">Email: {email}</p>
                <p className="card-text"><small className="text-muted">
                    Role: {role}
                </small></p>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon="fa-regular fa-trash-can"
                    role='button' className="text-danger fs-1"
                    onMouseEnter={(e)=>{
                        e.target.classList.add("fa-shake")
                        setTimeout(() => {
                            e.target.classList.remove("fa-shake")
                            
                        },1000);

                    }}
                    onClick={()=> removeUser(user.id)}/>

                <FontAwesomeIcon icon="fa-regular fa-pen-to-square" 
                                    role='button' className="text-info fs-1" 
                                    onMouseEnter={(e)=>{
                                        e.target.classList.add("fa-bounce")
                                        setTimeout(() => {
                                            e.target.classList.remove("fa-bounce")
                                            
                                        },1000);
                
                                    }}
                                    onClick={()=>setAdminEdit(user)}
                />

            </div>

        </div>

    </li>
  )
}
