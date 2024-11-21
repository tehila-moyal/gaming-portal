import { useState } from "react";
import { Link } from "react-router-dom";

import './Todo.scss'
import Header from "../../header/Header";
import TodoList from "./todoList/TodoList";
import AddTodo from "./addTodo/AddTodo";

import TodoContext from "../../../contexts/userContext/TodoContext";

function Todo({logdUser,users,setUsers}) {
  const firstTodo=logdUser.todoList
  

  const [todos, setTodos] = useState(firstTodo?firstTodo:[]);

  const add=({mission,important})=>{
    const newTodos = todos.concat({text:mission, important, completed:false,id:Date.now() })
    setTodos(newTodos)
   
  }

  const changeCompleted = (id) => {

    const newTodos = todos.map(todo => {

      if (todo.id === id) todo.completed = !todo.completed;
      return todo;

    })

    setTodos(newTodos);

  }

  const removeTodo=(id)=>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function saveTodo(){
    const newUsers = users.map(el => {
      if(el.id===logdUser.id){
       return{...el, todoList:todos}
      }else{
        return el
      }
    });
    setUsers(newUsers)
    localStorage.setItem('bulls-and-cows-users',JSON.stringify(newUsers))

    const edit= {...logdUser,todoList:todos}
    localStorage.setItem('bulls-and-cows-logdUser',JSON.stringify(edit))

  }



 

  return (
    <TodoContext.Provider value={{removeTodo, add, saveTodo}}>
      
    <div className="Todo d-flex flex-column align-items-center">
      <Header title={'Todo list'} />
      {logdUser.id &&<> <p className="h4 text-danger">Don't forget to save!</p><button className="btn m-3 btn-primary" onClick={saveTodo}><h4>save!</h4></button></>}
 
      
      <div className="wrapper">
        {!logdUser.id&&<div><h4>Because you are not a registered user,
           the to-do list will be deleted when you exit the application or refresh the page,<br/> 
           to save the data <Link to='/'>log in</Link> or <Link to='/addUser'>register</Link></h4></div>}
        <AddTodo/>
        <TodoList importantColor={'bg-primary'} todos={todos} changeCompleted={changeCompleted} deleteItem={removeTodo} />
       
      </div>

    </div>
    </TodoContext.Provider>
  );
}

export default Todo;
