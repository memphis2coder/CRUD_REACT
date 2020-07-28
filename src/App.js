import React from 'react';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App() {

  const todos = [ // array of todos
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];

  const todosList = todos.map(todo => ( // mapping through the todos array
      <Todo 
        key={todo.id} 
        id={todo.id} 
        name={todo.name} 
        completed={todo.completed}
      />
    )
  );
  
  function addTask(task) { // callback prop
    alert(task);
  };

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {todosList} 
      </ul>
    </div>
  );
}

export default App;
