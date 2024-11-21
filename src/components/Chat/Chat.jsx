import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../../contexts/userContext/UserContext'
import Post from './Post'
import { v4 as uuid } from 'uuid';
import ChatContext from '../../contexts/ChatContext';


export default function Chat({storage}) {
    const {logdUser}=useContext(UserContext)
    const chatText=useRef(null)
    const [err,setErr]=useState(false)
    

    const [blog,setBlog]=useState(    localStorage.getItem(storage) ? 
        JSON.parse(localStorage.getItem(storage))
      :[{id:8465312, time:'20/7/23', userId:1, userRole:'admin', content:'test',
        comments:[
          { id:64531, time:'20/7/23',userId:77, userRole:'player', content:'test1',parentId:8465312},
          { id:465312, time:'20/7/23',userId:121, userRole:'player', content:'test2',parentId:8465312},
          { id:6845312, time:'20/7/23',userId:77, userRole:'player', content:'test3',parentId:8465312}
        ]},
        {id:666666, time:'13/7/23', userId:77, userRole:'player', content:'this is a test',
          comments:[
            { id:12321, time:'25/7/23',userId:121, userRole:'player', content:'this is a test comment',parentId:666666},
            { id:123213, time:'15/7/23',userId:111, userRole:'admin', content:'nice',parentId:666666},
            { id:222222222, time:'13/7/23',userId:1, userRole:'admin', content:'is this  a test?',parentId:666666}
          ]},
    ])
    function upPost() {

        /**check validity?^
         * opstion to delete by usre id^
         * fix time 
         */
        if(chatText.current.value !== ''){
          const newPost=[{
            id:uuid(),
            time:new Date().toLocaleString(),
            userId:logdUser.id,
            userRole:logdUser.role,
            content:chatText.current.value,
            comments:[]
        } ]
        const newPosts = newPost.concat(blog)

        setBlog(newPosts)    
        chatText.current.value=''
        localStorage.setItem(storage,JSON.stringify(newPosts))
          

        }else{
          setErr(true)
          setTimeout(() => {
            setErr(false)
            
          }, 5000);
        }
    }

    function editPost(newPost) {
      const newPosts=blog.map(el=>{
        return el.id===newPost.id? newPost : el
      })
      setBlog(newPosts)
      localStorage.setItem(storage,JSON.stringify(newPosts))
      
    }

    function addComment(comment) {

        const newPosts = blog.map(el => {
          if(el.id===comment.id){
           return{...el, comments:el.comments.push(comment)}
          }else{
            return el
          }
        });
        setBlog(newPosts)
        localStorage.setItem(storage,JSON.stringify(newPosts))
    
    }

    function removePost(post){
      let newPosts
      if(post.parentId){
         newPosts=blog.map(el=>{
          if(el.id===post.parentId){
            const newOne={...el, comments:el.comments.filter(u=>u.id !== post.id)}
            return newOne
          }else{
            return el
          }

          })
      }else{
         newPosts = blog.filter(u=>u.id !== post.id)
      }


      localStorage.setItem(storage,JSON.stringify(newPosts))
      setBlog(newPosts)    
    
    }

    // order-0 order-sm-1 col-lg-8  offset-lg-2

  return (
    <ChatContext.Provider value={{addComment,removePost,editPost}}>

    <div className="mt-5 container post p-3 col-lg-9 col-sm-12 mainChat px-5">
      {err&&<h2 className='text-danger'>You didn't write anything</h2>}

        <textarea className="" ref={chatText}/>
        <button className='btn btn-primary' onClick={upPost}>post</button>
        {blog.map((el,inx)=>{
            return <Post key={inx} postContent={el} hasCommentInput isadmin={el.userRole==='admin'?true:false} />
        })}
    </div>
    </ChatContext.Provider>
  )
}
