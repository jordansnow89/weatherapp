import React, { Component } from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="cardBody">
      <div className="weatherCity">
        {" "}
        {this.props.city}
        <div className="tempMinMax">
          {" "}
          {this.props.temp_max}° / {this.props.temp_min}°
        </div>
      </div>
      <div className="weatherInfo">
        <div className="currentTemp">{this.props.temperature}°</div>
        <div className="iconInfo">
          <img
            height="125px"
            className="weatherIcon"
            src={`http://openweathermap.org/img/w/${this.props.icon}.png`}
            alt={null}
          />
        </div>
        <div className="description">{this.props.description}</div>
      </div>
      <div className="prediction"> Time of prediction {this.props.date}</div>
    </div>
  );
};
export default Card;

// const Card = ({}) => {
//   <div className="CardBody">
//     I am a card
//     {this.props.city}
//     {this.props.temperature}
//     {this.props.weather}
//     {this.props.icon}
//   </div>;
// };

// export default Card;
