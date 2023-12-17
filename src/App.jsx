import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TodoProvider } from './contexts'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (todo)=>{
    setTodos((prev)=> [...prev,{id: Date.now(),...todo}])
  }
  const updateTodo = (id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>{prevTodo.id === id ? todo : prevTodo}))
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((todo_thatneed_delete)=>{id !== todo_thatneed_delete.id}))
  }
  const toggeleComplete = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>{prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed}: prevTodo}))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify("todos"))
  },[todos])


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggeleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
