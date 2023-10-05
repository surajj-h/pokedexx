import {Component} from 'react';
import './card-list.styles.css';

class CardList extends Component{
  render(){

    const {searchListPokemons} =this.props;

    return (
      <div className='card-list'>
          {searchListPokemons.map((pokemon) => (
            <div className='card-container'>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}></img>
              <h1 key={pokemon.id}>{pokemon.name.english}</h1>
            </div>
          ))}
        </div>
    )
  }
}

export default CardList;
