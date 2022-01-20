import { useState } from 'react'
import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Apointment',
        day: 'Jan 1st at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting with Project manager',
        day: 'Jan 1st at 4:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Shopping for Groceries',
        day: 'Jan 1st at 6:30pm',
        reminder: false,
    }
]);

//Add Task
const addTask = (task)=>{
 const id = Math.floor(Math.random()*1000) + 1
 const newTask = {id,...task}
 setTasks([...tasks,newTask])
}

    //delete task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }


    //toogle reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id == id ?
    { ...task,reminder: !task.reminder}: task))
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      { showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />: 
        <div>
          <p>No Tasks Yet!</p>
        </div>}
    </div>
  );
}

// class App extends React.Component {
//   render(){
//     return <h1>Hello from Class Component</h1>
//   }
// }

export default App;
