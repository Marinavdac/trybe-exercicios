import cutecat from '../src/images/cutecat.jpg';
import './App.css';
import Image from './Image';
function App() {
  return (
    <main className="App">
      <header className="App-header">
        <Image src={ cutecat } alternativeText="Cute cat staring"/>
      </header>
    </main>
  );
}

export default App;
