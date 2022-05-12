import React from 'react';
import './App.css';
class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight: { value, measurementUnit}, image } = this.props;
        return (
            <div className="pokeCard">
            <img src={image} alt={name} />
            <div>Name: {name}</div>
            <div>Tipo: {type}</div>
            <div>Peso: {value} {measurementUnit}</div>
            </div>
        ) 
    }
}

export default Pokemon;