import React, { Component } from "react";
import "./search.css";

//Components
import Card from "../Card/card";
//React Imports
import { CircleLoader, FadeLoader, ClipLoader } from "react-spinners";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      city: "",
      temperature: null,
      icon: "",
      loading: false,
      weatherLoaded: false
    };
  }

  handleSearchInput = val => {
    this.setState({
      searchInput: val
    });

    console.log(this.state.searchInput);
  };

  //Internal API call for weather data
  handleSearch = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    axios
      .get(`/api/getWeather?search=${this.state.searchInput}`)
      .then(response => {
        let d = response.data;
        this.setState({
          city: d.name,
          temperature: d.main.temp,
          weather: d.weather.description,
          icon: d.weather.icon,
          loading: false,
          weatherLoaded: true
        });
        console.log(this.state);
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
          <form className="searchForm" onSubmit={this.handleSearch}>
            <input
              className="searchInput"
              placeholder="Search by City or Zip Code Here"
              onChange={e => this.handleSearchInput(e.target.value)}
            />
          </form>
          <div className="weatherBody">
            {this.state.loading && (
              <div className="sweet-loading">
                <ClipLoader
                  color={"#f18100"}
                  loading={this.state.loading}
                  size={250}
                />
              </div>
            )}

            {this.state.weatherLoaded && (
              <Card
                city={this.state.city}
                temperature={this.state.temperature}
                weather={this.state.weather}
                icon={this.state.icon}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
