import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

class App extends React.Component {
  render() {
    return (
    <>
    <h1 className="App-header">PokeDex</h1>
      <div className="App">
        
        {
          pokemons.map((element) => {
            return <Pokemon
            key={element.id}
            name={element.name}
            type={element.name}
            averageWeight={element.averageWeight}
            image={element.image}
            />}
          )
        }
        </div>
        </>
    )
  }
}

export default App;
