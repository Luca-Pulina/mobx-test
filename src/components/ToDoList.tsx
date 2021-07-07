import React, { useState } from 'react'
import { TodoStore, TodoStoreImpl } from '../store/ToDoStore'

// Store
import { observer } from 'mobx-react'

interface ToDoListProps {
    toDoStore: TodoStoreImpl
}

const ToDoList: React.FC<ToDoListProps> = observer(({ toDoStore }) => {

    const [value, setValue] = useState<string>('')
    const status = toDoStore.status

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleSubmit = () => {
        toDoStore.addTodo(value)
    }

    return (
        <div className="mt-10 ">
            <input type="text" value={value} onChange={(event) => handleInputChange(event)} className="bg-blue-500 text-white rounded-md p-2" />
            <button onClick={handleSubmit} >Submit</button>

            <p>Completed: {status.completed}</p>
            <p>Remaining: {status.remaining}</p>
            <ul>
                {toDoStore.todos.map(todo => {
                    return (
                        <li className="flex p-2 m-3 justify-center space-x-3" key={todo.id}  >
                            <p className="text-xl">{todo.title}</p>  
                            <button className={ todo.completed ? "bg-green-500 p-2 rounded-xl" : "bg-yellow-600 p-2 rounded-xl"} onClick= {() => toDoStore.toggleTodo(todo.id)}> Complete</button>
                            <button className="bg-red-500 p-2 rounded-xl" onClick={() => toDoStore.deleteToDo(todo.id)}> Delete</button>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
})

export default ToDoList

