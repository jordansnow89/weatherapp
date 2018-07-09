const axios = require("axios");
require("dotenv").config();

module.exports = {
  //external api call
  getWeather: (req, res) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${
      req.query.search
    }&units=imperial`;
    let token = `&appid=${process.env.WEATHER_API_KEY}`;

    axios
      .get(url + token)
      .then(results => {
        res.status(200).json(results.data);
        console.log(results.data);
      })
      .catch(error => console.log(error));
  }
};
