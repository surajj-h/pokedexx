import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import CardList from './Components/card-list/card-list.component'
import SearchBar from './Components/search-box/search-box.component'
import React from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      pokemons:[],
      search_pokemons:[]
    }
  }

  componentDidMount(){
    fetch('https://api.jsonbin.io/v3/b/651470d754105e766fba96ac')
    .then((response) => response.json())
    .then((records) => this.setState(() => {
      return {
        pokemons :records.record,
        search_pokemons :records.record
      }
    }))
    .catch(error => console.log("Invalid API request")
    );
  }

  onSearchChange = (event)=>{
      this.setState(()=>{
        return {search_pokemons : this.state.pokemons.filter((pokemon) => pokemon.name.english.toLowerCase().includes(event.target.value.toLowerCase()))}
      })
    }


  render(){

    const { pokemons,search_pokemons } = this.state ;
    const { onSearchChange } = this;
    return (
      <div className="App">
      <SearchBar onSearchChange={onSearchChange} placeholder="Search Pokemon" />
      <CardList searchListPokemons={search_pokemons}/>
      </div>
    );
  }

}

export default App;
