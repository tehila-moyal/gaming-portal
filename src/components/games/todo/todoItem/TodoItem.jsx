import { useContext } from "react";

import TodoContext from "../../../../contexts/userContext/TodoContext";


export default function TodoItem({ todo, num, importantColor,
                                   changeCompleted}) {

  const { id, text, completed, important } = todo;
  const defaultColor = "white";
  const { removeTodo } = useContext(TodoContext);

  const style = {
    li: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "1rem 2rem",
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: "2px",
      // background: important ? importantColor : defaultColor,
    },
    span: {
      display: "flex",
      alignItems: "center",
    },
    checkbox: {
      marginRight: "1rem",
    },
  };
// 
  return (
    <li className={important?importantColor:'bg-light'} style={style.li}>
      <span style={style.span}
            className={completed?"completed":""}>
        <input type="checkbox" style={style.checkbox}
            checked={completed} 
            onChange={() => {changeCompleted(id)}} />
        <strong>{num + ".\xa0"}</strong>
        {text}
      </span>
      <button className=" btn btn-danger delete" onClick={()=>{removeTodo(id)}}>&times; </button>
    </li>
  );
}
// &times;