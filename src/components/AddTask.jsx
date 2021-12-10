import PropTypes from "prop-types"
import { useState } from "react"
import Button from "./Button";

function AddTask({ onSubmit }) {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!text) {
            return alert("Please enter a task!")
        }
        onSubmit({ text, day, reminder })
        resetForm();
    }

    function resetForm() {
        setText("");
        setDay("");
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="text">Task</label>
                <input 
                    type="text" 
                    id="text" 
                    name="text" 
                    placeholder="Add Task" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                />
            </div>
            <div className="form-control">
                <label htmlFor="day">Day & Time</label>
                <input 
                    type="text" 
                    id="day" 
                    name="day"
                    placeholder="Add Day & Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder</label>
                <input 
                    type="checkbox" 
                    name="reminder" 
                    id="reminder" 
                    checked={reminder} 
                    onChange={(e) => setReminder(e.target.checked)}/>
            </div>
            <div>
                <Button block color="#000" type="submit">
                    Save Task
                </Button>
            </div>
        </form>
    )
}

AddTask.protoTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default AddTask;