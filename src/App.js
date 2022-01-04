import { useState } from 'react'
import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {
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


//delete task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} />: 
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
