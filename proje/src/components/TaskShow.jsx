import { useState } from "react";
import CreateTask from "./CreateTask";

const TaskShow = ({ task, onDelete, onUpdate }) => {
  const [edit, setEdit] = useState(false);
  

  const deleteTask = () => {
    onDelete(task.id)
  }

  const editTask = () => {
    setEdit(true)
  }

  const handleSubmit = (id, title, taskDesc) => {
    setEdit(false)
    onUpdate(id, title, taskDesc)
  }


return (
  <div className="task-show">
    {edit ? 
      <CreateTask task={task} show={true} onUpdate={handleSubmit}/>
    :
    <div>
      <h2>Başlık</h2>
      <p>{task.title}</p>
      <h2>Yapılacaklar</h2>
      <p>{task.taskDesc}</p>
      <div>
        <button onClick={deleteTask} className="delete-button">Sil</button>
        <button onClick={editTask} className="edit-button">Düzenle</button>
      </div>  
    </div>
  }
  </div>
  )
}

export default TaskShow;
