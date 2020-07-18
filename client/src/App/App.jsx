import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from '../Components/NavBar';
import axios from 'axios';
import SearchBar from "../Components/SearchBar";
import TyreList from "../Components/TyreList";
import Paginationn from "../Components/Paginationn";

export default class App extends Component {
  state = {
    tyres: [],
    apiUrl: 'http://localhost:3000/items',
    filteredTyre: [],
    searchText: "",
    currentPage: 1,
    postsPerPage: 3
  }

  setSearchText = (event) => {
    const searchText = event.target.value.toLowerCase();
    this.setState({ searchText }, this.filteredTyre);
  }

  filteredTyre = () => {
    const filteredTyre = this.state.tyres.filter(tyre => tyre.name.toLowerCase().includes(this.state.searchText) || Object.values(tyre.tyres.size).includes(this.state.searchText));
    this.setState({ filteredTyre });
  }

  async componentDidMount() {
    const res = await axios.get(this.state.apiUrl);
    this.setState({
      tyres: res.data,
      filteredTyre: res.data,
      currentPosts : this.state.tyres.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost)
    });
  }
  render() {
    const { currentPage, postsPerPage } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = this.state.filteredTyre.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNum => this.setState({ currentPage: pageNum });
    const nextPage = () => this.setState({ currentPage: currentPage + 1 })
    const prevPage = () => this.setState({ currentPage: currentPage - 1 })

    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <NavBar />
          </header>
        </Router>
        <main>
          <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
          <TyreList tyreData={this.state.filteredTyre} currentPosts={currentPosts} />
          <Paginationn postsPerPage={this.state.postsPerPage} totalPosts={this.state.tyres.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
        </main>
      </div>
    );
  }
}
