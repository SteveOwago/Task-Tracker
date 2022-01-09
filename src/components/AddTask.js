import { useState } from "react"
const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    return (
        <form action="" className="add-form">
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add Task"/>
            </div>
            <div className="form-control">
                <label htmlFor="">Day & Time</label>
                <input type="text" placeholder="Add Day & Time"/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" />
            </div>
            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}

export default AddTask
