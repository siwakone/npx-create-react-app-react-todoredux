// src/components/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TOGGLE_TASK, EDIT_TASK } from '../constants/actionTypes';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: TOGGLE_TASK, payload: { id: task.id } });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch({ type: EDIT_TASK, payload: { id: task.id, newDescription } });
    setIsEditing(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      
      {isEditing ? (
        <input 
          type="text" 
          value={newDescription} 
          onChange={(e) => setNewDescription(e.target.value)} 
        />
      ) : (
        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
          {task.description}
        </span>
      )}

      {isEditing ? (
        <button onClick={handleSave}>Sauvegarder</button>
      ) : (
        <button onClick={handleEdit}>Modifier</button>
      )}
    </div>
  );
};

export default Task;