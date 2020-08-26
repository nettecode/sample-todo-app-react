import React from 'react';

import './App.css';

function App() {
  let tasks = ['Todo #1', 'Todo #2', 'Todo #3', 'Todo #4'];

  return (
    <div className="App">
      <header>
        <h1>Lista zadań</h1>
      </header>
      <main>
        <ul>
          {tasks.map(task => <li>{task}</li>)}
        </ul>
      </main>
    </div>
  );
}

export default App;
