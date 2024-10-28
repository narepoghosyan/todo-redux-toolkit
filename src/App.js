import logo from './logo.svg';
import './App.css';
import React from "react";
import {Todos} from "./features/todos/Todos";

function App() {
    return (
        <div className="app">
            <Todos/>
        </div>
    );
}

export default App;
