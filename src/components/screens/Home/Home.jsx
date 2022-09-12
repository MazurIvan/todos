import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './Create-todo-field/CreateTodoField'

const data = [
{
    _id: 'faghrw4',
    title: 'Позайматися програмуванням',
    isCompleted: false,
},
{
    _id: 'fhw4',
    title: 'Приготувати їсти',
    isCompleted: false,
},
{
    _id: 'jj8g',
    title: 'Почитати книгу',
    isCompleted: false,
}
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t._id !== id))
    }

  return (
    <div className='text-white w-4/5 mx-auto'>
        <h1 className='text-2xl font-bold text-center mb-10'>Завдання на день</h1>
        {todos.map(todo => (<TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />))}
        <CreateTodoField setTodos={setTodos} />
    </div>
  )
}

export default Home