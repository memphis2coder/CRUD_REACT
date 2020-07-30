import React, { useState } from 'react'

export default function Todo(props) {

    const [isEditing, setEditing] = useState(false);
    const [editTodo, setEditTodo] = useState('');

    // function that sets editTodo
    function handleChange(e) {
        setEditTodo(e.target.value);
    }

    //function that handle the edit form
    function handleSubmit(e) {
        e.preventDefault();
        props.editTodo(props.id, editTodo)
        setEditTodo('');
        setEditing(false);
    }

    // edit view template
    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input id={props.id} className="todo-text" type="text" value={editTodo} onChange={handleChange} />
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
                    Cancel
                <span className="visually-hidden">renaming {props.name}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                <span className="visually-hidden">new name for {props.name}</span>
                </button>
            </div>
        </form>
    );

    // normal view template 
    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTodoCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setEditing(true)}>
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTodo(props.id)}
                >
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );

    return (
        <div>
            <li className="todo stack-small">
                {isEditing ? editingTemplate : viewTemplate}
            </li>
        </div>
    )
}
