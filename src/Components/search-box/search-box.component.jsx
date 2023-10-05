import {Component} from 'react';
import './search-box-style.css';

class SearchBar extends Component{
  render(){
    return <div>
      <input
      className ={`search-box ${this.props.className}`}
      type="search"
      placeholder={this.props.placeholder}
      onChange={this.props.onSearchChange} />
    </div>
  }
}

export default SearchBar;
