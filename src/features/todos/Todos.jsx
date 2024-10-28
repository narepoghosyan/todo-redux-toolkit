import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeTodo, completeTodo, addTodo} from './todosSlice';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Todo} from "./Todo";

export const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('')

    return (
        <div>
            <div>
                <TextField label="Add a todo" variant="outlined" value={inputText} onChange={(event) => {
                    setInputText(event.target.value)
                }}/>
                <Button variant="contained" onClick={() => {
                    if (!inputText) {
                        return;
                    }
                    dispatch(addTodo(inputText))
                }} sx={{ml: 2}}>Add</Button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Text</TableCell>
                            <TableCell align="right">Complete</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map((todo) => (
                            <TableRow
                                key={todo.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell><Todo todo={todo}/></TableCell>
                                <TableCell align="right">
                                    <button><Checkbox checked={todo.completed} onChange={(event) => {
                                        dispatch(completeTodo({todoId: todo.id, completed: event.target.checked}))
                                    }}/></button>
                                </TableCell>
                                <TableCell align="right"><Button onClick={() => {
                                    dispatch(removeTodo(todo.id))
                                }} color="error" variant="outlined">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}