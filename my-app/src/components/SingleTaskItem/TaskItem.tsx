import React from 'react';

const TaskItem = ({ task, toggleComplete, editTask, deleteTask }) => {
    return (
        <div className="task-item">
            <span
                style={{
                    textDecoration: task.status === 'completed' ? 'line-through' : 'none',
                    color: task.status === 'completed' ? 'gray' : 'black',
                }}
                onClick={() => toggleComplete(task.id)}
            >
                {task.title}
            </span>
            <button onClick={editTask}>Edit</button>
            <button onClick={deleteTask}>Delete</button>
        </div>
    );
};

export default TaskItem;
