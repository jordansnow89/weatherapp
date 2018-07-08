import React, { Component } from "react";
import "./App.css";

//COMPONENTS
import Header from "../src/components/Header/header";
import Search from "../src/components/Search/search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
