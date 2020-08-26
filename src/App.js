import React, { useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from './Todo';

function App() {
  const [ todos, setTodos ] = useState(["item1", "item2"]);
  const [ input, setInput ] = useState('');

  const addTodo = (event) =>{
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>Hellow world</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input   value={input} onChange={event => setInput(event.target.value)} ></Input>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add todo
        </Button>
        
      </form>
      

      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
