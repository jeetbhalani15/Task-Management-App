import React, { useState, useEffect } from 'react';
import AddTaskForm from './components/TaskDataForm/AddTaskForm';
import TaskList from './components/AllTaskList/TaskList';
import './index.css';

const App = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [filter, setFilter] = useState('inProgress');
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title, status) => {
        setTasks([...tasks, { id: Date.now(), title, status }]);
        setCurrentTask(null); // Reset after adding
    };

    const editTask = (id, title, status) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, title, status } : task
        ));
        setCurrentTask(null); // Reset after editing
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.status === 'completed';
        if (filter === 'pending') return task.status === 'pending';
        return true;
    });

    return (
        <div className="app">
            <h1>Task Manager</h1>
            <AddTaskForm
                addTask={addTask}
                editTask={editTask}
                currentTask={currentTask}
            />
            
            <div className="filter-buttons">
                <button onClick={() => setFilter('inProgress')}>All</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => setFilter('pending')}>Pending</button>
            </div>

            <TaskList
                tasks={filteredTasks}
                toggleComplete={toggleComplete}
                editTask={(task) => setCurrentTask(task)}
                deleteTask={deleteTask}
            />
        </div>
    );
};

export default App;
