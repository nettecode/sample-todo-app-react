import React from 'react';

import './App.css';

function App() {
  let tasks = [{
    name: 'Todo #1',
    done: true
  },
  {
    name: 'Todo #2',
    done: false
  },
  {
    name: 'Todo #3',
    done: true
  },
  ];

  return (
    <div className="App">
      <header>
        <h1>Lista zadań</h1>
      </header>
      <main>
        <ul>
          {tasks.map(task => <li><input type="checkbox" checked={task.done} />{task.name}</li>)}
        </ul>
      </main>
    </div>
  );
}

export default App;
