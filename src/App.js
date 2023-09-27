import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      pokemons:[
        {
        name:'pickachu'
      },
      {
        name:'charizard'
      }
      ,{
        name:'bulbasor'
      }
    ]

    }
  }

  render(){
    return (
      <div className="App">
      {
        this.state.pokemons.map((pokemon) => {
          return <h1>{pokemon.name}</h1>
        })
      }
      </div>
    );
  }

}

export default App;
