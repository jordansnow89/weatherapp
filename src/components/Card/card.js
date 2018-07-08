import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    return (
      <div className="CardBody">
        {this.props.city}
        {this.props.temperature}
        {this.props.description}
        {this.props.icon}
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
