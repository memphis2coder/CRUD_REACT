import React, {useState} from 'react'

export default function TodoInput(props) {

    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submitting value ${newTodo}`)
        setNewTodo('');
    }

    return (
        <div className="input-form">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={newTodo}  
                    onChange={e => setNewTodo(e.target.value)}         
                />
                <br/>
                <small>enter a new todo</small>
            </form>
        </div>
    )
};
