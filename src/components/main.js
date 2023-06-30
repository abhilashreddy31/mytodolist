import React, { useState } from 'react';
import './main.css'
function TodoList() {
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const inputTask = (event) => {
        setNewTask(event.target.value);
    };

    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter') {
            add();
        }
    };

    const add = () => {
        if (newTask.trim() !== '') {
            setTasks((prevTasks) => [
                ...prevTasks,
                { id: Date.now(), text: newTask, completed: false },
            ]);
            setNewTask('');
        }
    };

    const searchTask = (event) => {
        setSearchTerm(event.target.value);
    };

    const completeButton = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: true } : task
            )
        );
    };

    const deleteButton = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const search = () => {

        console.log('Search clicked. Search term:', searchTerm);
    };

    const filteredTasks = tasks.filter((task) =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="container-box">
                <h1>Todo List</h1>
              
                <div className='input-box'>

                <input type="text" placeholder="Enter a task" value={newTask} onChange={inputTask} onKeyPress={handleInputKeyPress} className="task-input" />
                <button onClick={add} className="add-button">Add</button>
                </div>
                
                <div className='search-box'>
                <input type="text"placeholder="Search tasks" value={searchTerm} onChange={searchTask} className="search-input"/>
                <button onClick={search} className="search-button">Search</button>


                </div>
                
                <ul>

                    {filteredTasks.map((task) => (
                        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} >
                            {task.text}
                            <button  onClick={() => completeButton(task.id)}>Complete</button>
                            <button  onClick={() => deleteButton(task.id)}>Delete</button>
                        </li>
                    ))}
           
           
           
                </ul>
            </div>







        </div>
    );
}

export default TodoList;
