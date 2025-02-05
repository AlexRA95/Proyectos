import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { useState } from 'react';
import Inicio from './components/Inicio.jsx'
import Error404 from './components/Error404.jsx'
import Task from './components/Task.jsx'
import AddTask from './components/AddTask.jsx'
import NavBar from './components/NavBar.jsx'

const App = () => {

  const [tareas, setTareas] = useState([]);

  const addTask = (tarea) => {
    setTareas([...tareas, tarea]);
  }

  return (
    <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/task" element={<Task tareas={tareas} />} />
        <Route path="/add-task" element={<AddTask onAddTask={addTask} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<App />)
