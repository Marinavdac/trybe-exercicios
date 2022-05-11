const toDo = ['estudar React', 'fazer exercícios do dia', 'refazer projetos passados', 'estudar Typescript']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
 return (
  <div className="App">
   <h1>Hello, world</h1>
     {toDo.map((task) => Task(task))}
  </div>
 );
}

export default App;
