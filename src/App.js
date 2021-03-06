import { useState, useEffect } from 'react'
import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async ()=>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])
  
  
  // Fetch Tasks Async uses await. It is a simpler method to work with promises in Js
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:4000/tasks')
    const data = await res.json()
    
    return data
  }
   // Fetch Tasks
   const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`)
    const data = await res.json()
    
    return data
  }
//Add Task
const addTask = async (task)=>{
  const res = await fetch('http://localhost:4000/tasks',{
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json()
  setTasks([...tasks,data])
//  const id = Math.floor(Math.random()*1000) + 1
//  const newTask = {id,...task}
//  setTasks([...tasks,newTask])
}

    //delete task 
  const deleteTask = async (id) => {
    await fetch(`http://localhost:4000/tasks/${id}`,{
      method: 'DELETE'
    })
    setTasks(tasks.filter((task)=> task.id !== id))
  }


    //toogle reminder

  const toggleReminder = async(id) => {

    const taskToToggle = await fetchTask(id)
    const updatedTask = {
      ...taskToToggle,
      reminder:!taskToToggle.reminder
    }

    const res = await fetch(`http://localhost:4000/tasks/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json()
    setTasks(tasks.map((task)=> task.id == id ?
    { ...task,reminder: data.reminder}: task))
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />: 
        <div>
          <p>No Tasks Yet!</p>
        </div>}
        <Footer/>
    </div>
  );
}

// class App extends React.Component {
//   render(){
//     return <h1>Hello from Class Component</h1>
//   }
// }

export default App;
