import Task from './Task'
const Tasks = ({tasks, onDelete}) => {
    
    return (
        <>
            {tasks.map((task) =>(
                <Task key={task.id} task={task} onDelete={onDelete}/>
                // <p><strong>Time</strong>{task.day}</p>
               
                
            ))}
        </>
    )
}

export default Tasks
