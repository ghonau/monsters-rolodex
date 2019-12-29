import React, {Component} from 'react';
import {CardList} from './components/CardList/CardList.component';
import {SearchBox} from './components/SearchBox/SearchBox.component';
import './App.css';
class App extends Component { 
  constructor(){
    super();
  
    this.state = {
      monsters :[],
      searchField:''
    }
     
  }
  componentDidMount()
  {
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(response =>  response.json())
     .then(users => this.setState({monsters:users}))
     ;
  };
  handleSearchBoxChange (e) {
    console.log(this); 
    this.setState({searchField: e.target.value});
  }
  render() {
    const {monsters, searchField} = this.state; 
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    console.log(this); 
    return (
      
      <div className="App">
      <h1>Monosters Rolodex</h1>
      <SearchBox type='search' placeholder='Search Monsters' handleChange={(e) => this.handleSearchBoxChange(e)}></SearchBox>
      <CardList monsters = {filteredMonsters}>
      </CardList>
      
    </div>
    );
    }
}

export default App;
