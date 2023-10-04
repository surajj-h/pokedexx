import {Component} from 'react';

class CardList extends Component{
  render(){
    return <div>
    {
        this.props.searchListPokemons.map((pokemon) => {
        return <h1 key={pokemon.id}>{pokemon.name.english}</h1>
      })
    }
    </div>
  }
}

export default CardList;
