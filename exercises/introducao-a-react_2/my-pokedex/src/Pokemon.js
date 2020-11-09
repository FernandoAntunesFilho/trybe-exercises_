import React from 'react';
import Pokedex from './Pokedex';
import './Pokemon.css'

class Pokemon extends React.Component {
    render() {
        return (
            <div className='pokemon'>
                <div className='pokemonText'>
                    <p>Pokemon: { this.props.nome }</p>
                    <p>Tipo: { this.props.tipo }</p>
                    <p>Peso médio: { this.props.peso } { this.props.un }</p>
                </div>
                <div className='pokemonImage'>
                    <img src={ this.props.imagem } />
                </div>
            </div>
        );
    };
};

export default Pokemon;