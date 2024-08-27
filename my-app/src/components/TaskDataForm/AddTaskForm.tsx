import React, { useState, useEffect } from 'react';

const AddTaskForm = ({ addTask, editTask, currentTask }) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskStatus, setTaskStatus] = useState('in progress');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (currentTask) {
            setTaskTitle(currentTask.title);
            setTaskStatus(currentTask.status);
            setIsEditing(true);
        } else {
            setTaskTitle('');
            setTaskStatus('in progress');
            setIsEditing(false);
        }
    }, [currentTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitle) {
            if (isEditing) {
                editTask(currentTask.id, taskTitle, taskStatus);
            } else {
                addTask(taskTitle, taskStatus);
            }
            setTaskTitle('');
            setTaskStatus('in progress');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input
                className='input-box'
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter task title"
            />
            <select
                className='select-box'
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
            >
                <option value="in progress">⚪ in progress</option>
                <option value="pending"> 🟡 pending</option>
                <option value="completed">🟢 completed</option>
            </select>
            <button type="submit">
                {isEditing ? 'Edit Task' : 'Add Task'}
            </button>
        </form>
    );
};

export default AddTaskForm;
