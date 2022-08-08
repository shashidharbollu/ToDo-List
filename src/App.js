import React,{useState} from 'react'
import TodoList  from './TodoList';

const App = () => {
  const[task,setTask] = useState(""); 
  const[todos,setTodos] = useState([]);

  const changeHandler =e =>{
    setTask(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo,index) => index != indexValue);
    setTodos(newTodos);


  }
  return(
    <div>
      <center>
            <h2 >Todo Management App</h2>
            <form onSubmit={submitHandler}>
              <input type="text" placeholder='enter your todo' name= "task" value={task} onChange={changeHandler}/> &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add" />
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          
      </center>

    </div>

  )

}

export default App