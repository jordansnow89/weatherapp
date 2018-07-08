import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    return (
      <div className="cardBody">
        <div className="weatherCity"> {this.props.city}</div>
        <div>
          <div className="currentTemp">{this.props.temperature}°</div>
          <div className="description">{this.props.description}</div>
          <div className="icon">
            <img
              height="125px"
              className="weatherIcon"
              src={`http://openweathermap.org/img/w/${this.props.icon}.png`}
              alt={null}
            />
          </div>
        </div>
      </div>
    );
  }
}
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
