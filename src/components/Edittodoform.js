import React, {useState} from 'react'

 const Edittodoform = ({editTodo, task}) => {
  const [value, setvalue] = useState(task.task)
  const handlesubmit = e => {
    e.preventDefault();
   
     editTodo(value, task.id)

     setvalue("")
  
  }
  return (
    <form className='Todoform' onSubmit={handlesubmit}>
      <input type='text' className='todo-input' value ={value} placeholder='update task?' onChange={(e) => setvalue(e.target.value)}></input>
      <button type='submit' className='todo-btn'>Update Task</button>
      </form>
  )
}
export default Edittodoform
