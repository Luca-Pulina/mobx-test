import React, { useState } from 'react'

//Style
import './App.css'
import './tailwind.css'

//Components
import ToDoList from './components/ToDoList'
import { TodoStore } from './store/ToDoStore'

function App() {


  return (
    <div className="App">
      <ToDoList toDoStore={TodoStore} />
    </div>
  )
}

export default App
