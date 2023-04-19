import './App.css'
import CreateTask from './components/CreateTask'
import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([]);
  

  const TaskCreate = async (title, taskDesc) => {
    await axios.post('http://localhost:3000/tasks', {
      title: title,
      taskDesc: taskDesc
    })
    fetchTasks()
  }

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3000/tasks')
    setTasks(response.data)
  }

  useEffect(() => {
    fetchTasks()
  },[])

  const TaskDelete = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`)
    fetchTasks()
  }

  const TaskUpdate = async (id, title, taskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: title,
      taskDesc: taskDesc
    })
    fetchTasks()
  }

  return (
    <div className="App">
      <h2>Lütfen Görev Ekleyiniz !</h2>
      <CreateTask onCreate={TaskCreate}/>
      <TaskList tasks={tasks} onDelete={TaskDelete} onUpdate={TaskUpdate}/>
    </div>
  )
}

export default App
