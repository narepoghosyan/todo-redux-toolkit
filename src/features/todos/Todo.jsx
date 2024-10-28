import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import {editTodo} from "./todosSlice";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

import styles from "./todos.module.css";
import {useDispatch} from "react-redux";

export const Todo = ({todo}) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [newText, setNewText] = useState(todo.text)

    if(editMode) {
        return (
            <div className={styles.todo}>
                <TextField label="Add a todo" variant="outlined" value={newText} onChange={(event) => {
                    setNewText(event.target.value)
                }} sx={{ mr: 2}}/>
               <div>
                   <Button variant="contained" onClick={() => {
                       if(!newText) {
                           return;
                       }
                       dispatch(editTodo({todoId: todo.id, text: newText}))
                       setEditMode(false)
                   }} color="success" sx={{ mr: 2}}>Save</Button>
                   <Button variant="outlined" onClick={() => {
                       setEditMode(false);
                       setNewText(todo.text)
                   }} color="error">Cancel</Button>
               </div>
            </div>


        )
    }

    return (
        <div className={styles.todo}>
            <Box component="span"
                className={todo.completed ? styles.completed : ''} sx={{pr: 2}}>{todo.text}</Box>
            <Button variant="outlined" onClick={() => {setEditMode(true)}}>Edit</Button>
        </div>
    )
}