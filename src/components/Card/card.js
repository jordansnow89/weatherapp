import React from "react";
import "./card.css";

const Card = ({
  city,
  temp_max,
  temp_min,
  temperature,
  icon,
  description,
  date
}) => {
  return (
    <div className="cardBody">
      <div className="weatherCity">
        {city}
        <div className="tempMinMax">
          {temp_max}° / {temp_min}°
        </div>
      </div>
      <div className="weatherInfo">
        <div className="currentTemp">{temperature}°</div>
        <div className="iconInfo">
          <img
            height="125px"
            className="weatherIcon"
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt=""
          />
        </div>
        <div className="description">{description}</div>
      </div>
      <div className="prediction"> Time of prediction {date}</div>
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
