import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.components';
import './App.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
      this.setState({ searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
     const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className='App'>
        <h1>Monsters Roledex</h1>

        <SearchBox
          placeholder = 'search monsters'
          handleChange = { e => {
            this.setState({ searchField: e.target.value })}} 
        />

        <CardList monsters = { filteredMonsters } />

      </div>
    )
  }
}

export default App;
