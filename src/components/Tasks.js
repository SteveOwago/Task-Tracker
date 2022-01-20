import Task from './Task'
import React, { useState }  from 'react';
const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return (
        <>
            {tasks.map((task) =>(
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
                // <p><strong>Time</strong>{task.day}</p>
               
                
            ))}
        </>
    )
}

export default Tasks
