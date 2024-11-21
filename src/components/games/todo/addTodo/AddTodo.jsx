import React from 'react'
import { useState } from 'react'
import TodoContext from '../../../../contexts/userContext/TodoContext';
import { useContext } from 'react';
import './AddTodo.scss'

export default function AddTodo() {
    const { add } = useContext(TodoContext);

    
    const [formData,setFormData]=useState({
        mission:"",
        important:false
    })

    function onSubmit(e) {
        e.preventDefault()
        if(formData.mission){
            add(formData)
            setFormData({
                mission:"",
                important:false
            })
            
        }
    }


    return (
    <>
    <h3 style={{marginLeft:"2rem"}}>Add todo:</h3>
    <form className="AddTodoForm" style={{marginLeft:"2rem"}} onSubmit={onSubmit} >
        <label>misson:</label>
         <input type='text' value={formData.mission} required onChange={(e)=>{setFormData({...formData,mission:e.target.value})}}/>
        
        <label >impotent?</label>
        <input type='checkbox' checked={formData.important}  onChange={(e)=>{setFormData({...formData,important:e.target.checked})}}/>
        
        <button className='btn btn-warning' type='submit'>Add</button>
    </form>

    </>
  )
}
