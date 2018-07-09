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
      loading: false,
      weatherLoaded: false,
      previous: []
    };
  }

  handleSearchInput = val => {
    this.setState({
      searchInput: val
    });
  };

  savePrevious = (city, temperature, icon) => {
    let array = [[city, temperature, icon]];

    this.setState({
      previous: array.concat(this.state.previous)
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
          return this.setState({
            description:
              element.description.charAt(0).toUpperCase() +
              element.description.slice(1),
            icon: element.icon
          });
        });
        this.savePrevious(
          this.state.city,
          this.state.temperature,
          this.state.icon
        );

        console.log(this.state);
      })

      .catch(console.log);
  };

  componentDidMount() {}

  render() {
    return (
      <div className="searchBody">
        <h3>
          Welcome to Weather App! Type a city or Zipcode below to see its
          current predicted forecast!
        </h3>
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
            {this.state.weatherLoaded ? (
              <Card
                city={this.state.city}
                temperature={this.state.temperature}
                description={this.state.description}
                icon={this.state.icon}
                temp_max={this.state.temp_max}
                temp_min={this.state.temp_min}
                date={this.state.date}
              />
            ) : null}
          </div>
          <div className="previousSearchBody">
            {this.state.previous.map((element, index) => (
              <div className="previouslySearched" key={index}>
                <div className="previousBox">
                  <div className="previousCity">{element[0]}</div>
                  <div className="previousTemp">{element[1]}</div>
                  <img
                    height="125px"
                    className="weatherIcon"
                    src={`http://openweathermap.org/img/w/${element[2]}.png`}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
