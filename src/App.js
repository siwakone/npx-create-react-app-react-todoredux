// src/App.js
import React from 'react';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';
import './App.css'; // Pour un peu de style

function App() {
  return (
    <div className="App" style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #eee' }}>
      <h1>Liste de Tâches avec Redux</h1>
      <Addtask />
      <ListTask />
    </div>
  );
}

export default App;