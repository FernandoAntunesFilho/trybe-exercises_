import React from 'react';
import pokemons from './data';
import Pokemom from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return(
            pokemons.map(atual => <Pokemom nome={ atual.name } tipo={ atual.type } peso={ atual.averageWeight.value } un={ atual.averageWeight.measurementUnit } imagem={ atual.image } /> )
        );
    };
};

export default Pokedex;