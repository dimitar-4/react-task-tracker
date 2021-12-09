import PropTypes from "prop-types";
import Task from "./Task";

function Tasks({ tasks, onToggle }) {
    if (!tasks || tasks.length === 0) {
        return <p>No tasks to display!</p>
    }
    return tasks.map((task) => (
        <Task onToggle={onToggle} key={task.id} task={task} />
    ))
}

Tasks.defaultProps = {
    tasks: [],
}

Tasks.propTypes = {
    tasks: PropTypes.array,
    onToggle: PropTypes.func.isRequired,
}

export default Tasks;
