import {Component} from 'react';

class SearchBar extends Component{
  render(){
    return <div>
      <input className="search-box" type="search" placeholder={this.props.placeholder} onChange={this.props.onSearchChange} />
    </div>
  }
}

export default SearchBar;
