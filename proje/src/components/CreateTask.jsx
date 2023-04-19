import React from "react";
import { useState } from "react";

const CreateTask = ({ onCreate, task, show, onUpdate }) => {
    const [title, setTitle] = useState(task ? task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');
    

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleTaskDesc = (e) => {
        setTaskDesc(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(show) {
            onUpdate(task.id, title, taskDesc)
        } else {
            onCreate(title, taskDesc)
        }
        setTitle('')
        setTaskDesc('')
    }

  return (
        <div className="task-update">
            {show ?
                <div className="task-create update">
                    <label className="task-label">Görev Başlığı</label>
                    <input value={title} onChange={handleTitle}  className="task-input"/>
                    <label className="task-label">Görev</label>
                    <textarea value={taskDesc} onChange={handleTaskDesc}  rows={5}  className="task-textarea"/>
                    <button onClick={handleSubmit} className="task-button editButton">Güncelle</button>
                </div>
            :
                <div className="task-create">
                    <label className="task-label">Görev Başlığı</label>
                    <input value={title} onChange={handleTitle}  className="task-input"/>
                    <label className="task-label">Görev</label>
                    <textarea value={taskDesc} onChange={handleTaskDesc}  rows={5}  className="task-textarea"/>
                    <button onClick={handleSubmit} className="task-button">Oluştur</button>
                </div>
            }
        </div>
)};


export default CreateTask;
