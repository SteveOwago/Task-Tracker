const tasks = [
    {
        id:1,
        text: 'Doctors Apointment',
        day: 'Jan 1st at 2:30pm',
        reminder: true,
    },
    {
        id:1,
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
]


const Tasks = () => {
    return (
        <>
            {tasks.map((task) =>(
                <h3 key={task.id}>{task.text}</h3>
                // <p><strong>Time</strong>{task.day}</p>
                
            ))}
        </>
    )
}

export default Tasks
