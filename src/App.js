import React, { useState } from 'react';
import './App.css';

function App() {
  const [ todos, setTodos ] = useState(["item1", "item2"]);
  const [ input, setInput ] = useState('');

  const addTodo = (event) =>{
    setTodos([...todos, input]);
  };

  return (
    <div className="App">
      <h1>Hellow world</h1>
      <input value={input}  onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>Add todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
