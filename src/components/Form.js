import React, {useState} from 'react'

export default function Form(props) {

    const [newInput, setNewInput] = useState('');

    function handleSubmit(e) { // function to run after submit
        e.preventDefault();
        props.addTask(newInput);
        setNewInput("");
    }

    function handleChange(e) { // listen to value change
        setNewInput(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                        What needs to be done?
                    </label>
                </h2>
                    <input
                    value={newInput}
                    onChange={handleChange}
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                />
                    <button 
                        type="submit" 
                        className="btn btn__primary btn__lg" 
                    >
                            Add
                    </button>
            </form>
        </div>
    )
};
