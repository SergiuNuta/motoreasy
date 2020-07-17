import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from '../Components/NavBar';
import axios from 'axios';
import SearchBar from "../Components/SearchBar";
import TyreList from "../Components/TyreList";

export default class App extends Component {
  state = {
    tyres: [],
    apiUrl: 'http://localhost:3000/items',
    filteredTyre: [],
    searchText: ""
  }

  setSearchText = (event) => {
    const searchText = event.target.value;
    console.log(searchText)
    this.setState({ searchText }, this.filteredTyre);
  }

  filteredTyre = () => {
    const filteredTyre = this.state.tyres.filter(tyre => tyre.name.includes(this.state.searchText));
    this.setState({ filteredTyre });
  }

  async componentDidMount() {
    const res = await axios.get(this.state.apiUrl);
    this.setState({
      tyres: res.data,
      filteredTyre: res.data
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <NavBar />
          </header>
        </Router>
        <main>
          <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
          <TyreList tyreData={this.state.filteredTyre} />
        </main>
      </div>
    );
  }
}
