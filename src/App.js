import React, { useState } from 'react';

import './App.css';

function App() {
  const [tasks, setTasks] = useState(
    [{
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
    ]
  );

  const handleChange = (index) => {
    console.log(index);
    let newTasks = [...tasks];
    newTasks[index] = { ...tasks[index], done: !tasks[index].done };
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <header>
        <h1>Lista zadań</h1>
      </header>
      <main>
        <ul>
          {tasks.map((task, i) => <li key={i}><input type="checkbox" checked={task.done} onChange={() => handleChange(i)} />{task.name}</li>)}
        </ul>
      </main>
    </div>
  );
}

export default App;
