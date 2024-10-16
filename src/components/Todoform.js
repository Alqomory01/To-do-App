import React, {useState} from 'react'

 const Todoform = ({addTodo}) => {
  const [value, setvalue] = useState("")
  const handlesubmit = e => {
    e.preventDefault();
   
     addTodo(value)

     setvalue("")
  
  }
  return (
    <form className='Todoform' onSubmit={handlesubmit}>
      <input type='text' className='todo-input' value ={value} placeholder='what is it  the task today?' onChange={(e) => setvalue(e.target.value)}></input>
      <button type='submit' className='todo-btn'>Add Task</button>
      </form>
  )
}
export default Todoform
