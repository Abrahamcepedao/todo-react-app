import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from './Todo';
import { db } from './firebase';

function App() {
  const [ todos, setTodos ] = useState([]);
  const [ input, setInput ] = useState('');

  const addTodo = (event) =>{
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };

  useEffect(() => {
    db.collection("todos").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    })
  }, [input]);

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
