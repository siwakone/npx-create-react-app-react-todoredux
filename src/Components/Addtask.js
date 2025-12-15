// src/components/Addtask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TASK } from '../constants/actionTypes';

const Addtask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      const newTask = {
        id: Date.now(), // Utilisation d'un timestamp comme ID unique
        description: description.trim(),
        isDone: false,
      };
      dispatch({ type: ADD_TASK, payload: newTask });
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text"
        placeholder="Nouvelle tâche..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '10px' }}>Ajouter Tâche</button>
    </form>
  );
};

export default Addtask;