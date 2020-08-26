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

  const handleChange = (index) => {
    console.log(index);
    tasks[index].done = !tasks[index].done;
    console.log(tasks)
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
