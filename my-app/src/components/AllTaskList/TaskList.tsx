import React, { useState } from 'react';
import TaskItem from '../SingleTaskItem/TaskItem';

const TaskList = ({ tasks, toggleComplete, editTask, deleteTask }) => {
    const [expanded, setExpanded] = useState(null);

    const handleToggleAccordion = (section) => {
        setExpanded(expanded === section ? null : section);
    };

    const groupedTasks = {
        inProgress: tasks,
        completed: tasks.filter(task => task.status === 'completed'),
        pending: tasks.filter(task => task.status === 'incomplete')
    };

    return (
        <div className="task-list">
            {['inProgress', 'completed', 'pending'].map((section) => (
                // accordian
                <div key={section} className="accordion">
                    <button
                        className="accordion-header"
                        onClick={() => handleToggleAccordion(section)}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)} ({groupedTasks[section].length})
                    </button>
                    <div
                        className={`accordion-body ${expanded === section ? 'expanded' : ''}`}
                    >
                        {groupedTasks[section].map(task => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                toggleComplete={toggleComplete}
                                editTask={() => editTask(task)}
                                deleteTask={() => deleteTask(task.id)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
