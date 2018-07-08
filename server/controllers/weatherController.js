const axios = require("axios");
require("dotenv").config();

module.exports = {
  getWeather: (req, res) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${
      req.query.search
    }&units=imperial`;
    let token = `&appid=${process.env.WEATHER_API_KEY}`;

    axios
      .get(url + token)
      .then(results => {
        res.json(results.data);
        // console.log(res);
      })
      .catch(error => console.log(error));
  }
};
