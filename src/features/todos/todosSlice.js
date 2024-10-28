import {v4 as uuidv4} from 'uuid';
import {createSlice} from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [{
            id: uuidv4(),
            text: 'Have breakfast',
            completed: false
        }]
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: uuidv4(),
                text: action.payload,
                completed: false
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        completeTodo(state, action) {
            state.todos = state.todos.map(todo => {
                if (todo.id == action.payload.todoId) {
                    return {
                        ...todo,
                        completed: action.payload.completed
                    }
                }
                return todo
            })
        },
        editTodo(state, action) {
            state.todos = state.todos.map(todo => {
                if (todo.id == action.payload.todoId) {
                    return {
                        ...todo,
                        text: action.payload.text
                    }
                }
                return todo
            })
        }
    }
})

export default todosSlice.reducer;
export const {addTodo, removeTodo, completeTodo, editTodo} = todosSlice.actions