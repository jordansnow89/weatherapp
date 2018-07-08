import React, { Component } from "react";
import "./search.css";
import axios from "axios";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }

  handleSearchInput = val => {
    this.setState({
      searchInput: val
    });

    console.log(this.state.searchInput);
  };

  handleSearch = event => {
    event.preventDefault();
    axios
      .get("/api/getWeather")
      .then(response => {
        console.log(response.data);
      })
      .catch(console.log);
  };

  render() {
    return (
      <div className="searchBody">
        <h2>
          Welcome to Weather App! Type a city below to see its 5 day forecast!
        </h2>
        <div className="searchWindow">
          <form onSubmit={this.handleSearch}>
            <input
              className="searchInput"
              placeholder="Search by City Here"
              onChange={e => this.handleSearchInput(e.target.value)}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Search;
