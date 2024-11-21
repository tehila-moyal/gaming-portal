import React, { useContext, useState,useRef } from 'react'
import './chat.scss'
import UserContext from '../../contexts/userContext/UserContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import justUserImg from '../../assets/images/user02.png';
import ChatContext from '../../contexts/ChatContext';
import { v4 as uuid } from 'uuid';


export default function Post({postContent,isadmin, hasCommentInput}) {

    const [re,setre]=useState(true)
    // const [comments,setComents]=useState(postContent.comments)
    const {comments}=postContent
    const {users,logdUser,getRandomPic}= useContext(UserContext)
    const {removePost,editPost}= useContext(ChatContext)
    const commentText=useRef(null)
    // const [commentText,setCommentText]=useState(null)

    function upPost() {
        if(commentText.current.value !== ''){
            const newPost=[{
            
              id:uuid(),
              time:new Date().toLocaleString(),
              userId:logdUser.id,
              userRole:logdUser.role,
              content:commentText.current.value,
              parentId:postContent.id
          } ]

          commentText.current.value=''
          const newComments = newPost.concat(comments)
          const newPosts={...postContent, comments:newComments}
          editPost(newPosts)
          setre(false)
          
        }
    }
    
    function findUser(pic){
        for (let i = 0; i < users.length; i++) {
            if(users[i].id===postContent.userId){
                return users[i][pic]
            }
        }
    }

    function checkDelete() {
        return postContent.userId===logdUser.id? true: logdUser.role==='admin'? true: false
    }

    
    const userpic=findUser('pic')
    const userName=findUser('nick')

  return (
    <div className='col-sm-12 mt-5 container post p-3 '>
                    
        <div className='d-flex' >
            <div className='col-lg-9 col-sm-8 d-flex align-items-center' style={{fontSize:'1.5rem'}}>
                <img className='col-3 ' style={{maxWidth: '3rem'}} src={userpic?userpic:getRandomPic()} />
                <p className=''>{userName?userName:"Not available"}</p>
                {isadmin&&<FontAwesomeIcon className='text-primary m-2 mb-3' icon="fa-solid fa-screwdriver-wrench" />}

            </div>

            <p className='col-3'>{postContent.time}</p>
          {checkDelete()  &&
          <FontAwesomeIcon icon="fa-regular fa-square-minus"  role='button' className="text-danger fs-1"
                    onMouseEnter={(e)=>{
                        e.target.classList.add("fa-shake")
                        setTimeout(() => {
                            e.target.classList.remove("fa-shake")
                            
                        },1000); 
                    }} onClick={()=> removePost(postContent)}/>}
    
        </div>
        
        <div className='bg-light '> 
            <p className='textOfPost mt-5' style={{height:'3rem'}}> {postContent.content}</p> 
        </div>

        {hasCommentInput && <div className='d-flex'> 
            <textarea className="" ref={commentText}/>
            <button className='btn btn-primary' onClick={upPost}>post</button>
        </div>}

       {comments?.length > 0 &&
       <>
       {comments?.map((comment) => {
        return(
            <Post key={uuid()} postContent={comment} isadmin={comment.userRole==='admin'?true:false}/>
            
        )
       })}

       </>
        }
       
    </div>
  )
}
