import React from 'react'

import './TodoTable.css';

export default function TodoTable(props) {

    

    return (
        <div className="todo-list">
            <table>
                <thead>
                    <tr>
                        <th>done</th>
                        <th>todo</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map((todo) => (
                        <tr key={todo.id}>    
                            <td>
                                <input 
                                    type="checkbox" 
                                    checked={props.done}
                                />
                            </td>
                                <td><span className="todo.done ? 'done' : ''">{todo.todo}</span></td>
                            <td>
                                <button className="button">Edit</button>
                                <button className="button">Delete</button>
                            </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
