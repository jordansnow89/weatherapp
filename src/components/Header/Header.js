import React, { Component } from "react";
import "./header.css";
import cloud from "../../icons/cloud.svg";

class Header extends Component {
  render() {
    return (
      <div className="headerbody">
        <div className="logo">
          <p className="firstWord">WEATHER</p>
          <p className="secondWord">APP</p>
        </div>
        <img className="cloud" src={cloud} alt="" />
      </div>
    );
  }
}
export default Header;
