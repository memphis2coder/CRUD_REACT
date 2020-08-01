import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import {nanoid} from 'nanoid';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

function App(props) {

  const [todos, setTodos] = useState([]); // the todos list
  const [filter, setFilter] = useState('ALL') // filter buttons

  const todosList = todos.map(todo => ( // mapping through the todos array
      <Todo 
        key={todo.id} 
        id={todo.id} 
        name={todo.name} 
        completed={todo.completed}
        toggleTodoCompleted={toggleTodoCompleted}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    )
  );
  // function to add a new todo
  function addTask(todo) { // callback prop
    const newTodo = { 
      id: "todo-" + nanoid(), 
      name: todo, 
      completed: false
    };
    setTodos([newTodo, ...todos ]);
  };

  // function to count how many todos are left
  const taskNoun = todosList.length === 1 ? 'task' : 'tasks'
  const taskRemaining = `${todosList.length} ${taskNoun} remaining`;
  
  // add text decoration when todo is complete
  function toggleTodoCompleted(id) {
    const updateTodos = todos.map(todo => {
      if (id === todo.id) {
        return {
          ...todo, completed: !todo.completed
        }
      }
      return todo;
    });
    setTodos(updateTodos);
    console.log(todos[0])
  };

  // delete a todo function
  function deleteTodo(id) {
    const remainingTodos = todos.filter(todo => id !== todo.id);
    setTodos(remainingTodos);
  };

  // edit a todo function
  function editTodo(id, newEdit) {
    const editedTodosList = todos.map(todo => {
      if (id === todo.id) {
        return {
          ...todos, 
          name: newEdit
        }
      }
      return todo;
    });
    setTodos(editedTodosList)
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/> {/* addTask function */}
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        {taskRemaining}
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
