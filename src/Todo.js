import React, { useState } from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Modal, Button } from '@material-ui/core';
import { db } from './firebase';
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon  from '@material-ui/icons/DeleteForever';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen]  = useState(false);
    const [input, setInput] = useState();
    
    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () =>{
        db.collection('todos').doc(props.text.id).set({
            todo: input
        }, { merge: true});
        
        setOpen(false);
    }

    return (
    <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>modal</h1>
                <input placeholder={props.text.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>
        <List className="todo__list">
            <ListItem>
            <ListItemAvatar></ListItemAvatar>
            <ListItemText primary={props.text.todo} secondary="another line" />
            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.text.id).delete()}/>
            </ListItem>
        </List>
      </>
    );
}

export default Todo;
