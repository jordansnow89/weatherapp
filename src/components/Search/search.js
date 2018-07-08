import React, { Component } from "react";
import "./search.css";

//Components
import Card from "../Card/card";
//React Imports
import { ClipLoader } from "react-spinners";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      description: "",
      previous: [],
      loading: false,
      weatherLoaded: false
    };
  }

  handleSearchInput = val => {
    this.setState({
      searchInput: val
    });
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
          weather: d.weather,
          temp_max: d.main.temp_max,
          temp_min: d.main.temp_min,
          date: d.dt,
          loading: false,
          weatherLoaded: true
        });
        //Description is returned in an Array and the string is not capitalized
        this.state.weather.map(element => {
          this.setState({
            description:
              element.description.charAt(0).toUpperCase() +
              element.description.slice(1),
            icon: element.icon
          });
        });
        this.state.previous.push(this.state.city);
        console.log(this.state);
      })
      .catch(console.log);
  };

  componentDidMount() {
    console.log(this.state);
  }

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
                description={this.state.description}
                icon={this.state.icon}
                temp_max={this.state.temp_max}
                temp_min={this.state.temp_min}
                date={this.state.date}
              />
            )}
          </div>
          <div className="previousSearchBox">
            {this.state.previous.map((element, index) => (
              <div key={index}>{element}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
