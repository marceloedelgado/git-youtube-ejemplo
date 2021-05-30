import React from 'react'
console.log("Hola Mundo, me falto este mensaje");
const task = [
{ id: 1, name: "Tarea 1", completed: false, assigned: "Carlos" },
{id: 2, name: "Tarea 2", completed: false, assigned: "Bob"},
{id: 3, name: "Tarea 3", completed: false, assigned: "Zack"}
];

function TodoList () {
    const deleteTask = () => {
        //TODO: Delete task;
    } 

    const updateTask = () => {
        //TODO: Delete task;
    }

    for (let task of tasks) {
        //TODO: Loop trough tasks and delete.
    }
    return (
        <ul>
            {task.map(t => (
                <li key={t.id}>{t.name} <button onClick={}></button>  </li>))}
        </ul>
    )
}


 