import React from 'react';
import './App.css';
import Title from './components/Title'
import TaskList from './components/TasksList'
import ClearTasks from './components/ClearTasks'

function App() {
  return (
    <div className="App">
     <Title/>
     <TaskList/>
    </div>
  );
}

export default App;
