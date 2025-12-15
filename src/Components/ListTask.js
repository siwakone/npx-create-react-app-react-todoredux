// src/components/ListTask.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { SET_FILTER } from '../constants/actionTypes';

const ListTask = () => {
  const { todos, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleFilterChange = (newFilter) => {
    dispatch({ type: SET_FILTER, payload: newFilter });
  };

  const filteredTasks = todos.filter(task => {
    if (filter === 'DONE') return task.isDone;
    if (filter === 'UNDONE') return !task.isDone;
    return true; // 'ALL'
  });

  return (
    <div>
      {/* Boutons de Filtre */}
      <div style={{ marginBottom: '15px' }}>
        <button 
          onClick={() => handleFilterChange('ALL')} 
          disabled={filter === 'ALL'}
          style={{ marginRight: '5px' }}
        >
          Toutes
        </button>
        <button 
          onClick={() => handleFilterChange('DONE')} 
          disabled={filter === 'DONE'}
          style={{ marginRight: '5px' }}
        >
          Faites
        </button>
        <button 
          onClick={() => handleFilterChange('UNDONE')} 
          disabled={filter === 'UNDONE'}
        >
          À Faire
        </button>
      </div>

      {/* Liste des Tâches */}
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;