import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

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
      return {pokemons :records.record,search_pokemons :records.record}
    }))
    .catch(error => console.log("Invalid API request")
    );
  }


  render(){
    return (
      <div className="App">
      <input className="search-box" type="search" placeholder="search pokemon" onChange={(event)=>{
        this.setState(()=>{
          return {search_pokemons : this.state.pokemons.filter((pokemon) => pokemon.name.english.toLowerCase().includes(event.target.value.toLowerCase()))}
        })
      }} />
      {
        this.state.search_pokemons.map((pokemon) => {
          return <h1 key={pokemon.id}>{pokemon.name.english}</h1>
        })
      }
      </div>
    );
  }

}

export default App;
