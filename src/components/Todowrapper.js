import React, {useState, useEffect} from 'react'
import Todoform from './Todoform'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo'
import Edittodoform from './Edittodoform';
import styled from 'styled-components';
uuidv4();

  const Todowrapper = () => {
  const [todos, setTodos] = useState([]);
  
  
  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isediting: false }])
    
  };
  useEffect( () => {
    console.log(todos);
  }, [todos])
  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id? {...todo, completed: !todo.completed} : todo))
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id!== id))
  }
  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo ))
  }
  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo ))
  }
  return (
    <>
    <Wrapper>
    <div className='todowrapper'>
      <h1>Focus on what matters Today!</h1>
     <Todoform addTodo={addTodo}/> 
     {todos.map((todo, index) => (
      todo.isEditing ? (
        < Edittodoform editTodo = {editTask} task={todo}/>
      ) : (
        <Todo task={todo} keys={index}
        toggleComplete={toggleComplete} deleteTodo= {deleteTodo}
        editTodo={editTodo} />
        )
        ))}
      
     
    
    </div>
    </Wrapper>
    </>
  )
}
const Wrapper =styled.div`
.todowrapper{
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #1e065a;
  color:white;
}
`
export default Todowrapper
