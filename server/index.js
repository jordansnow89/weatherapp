const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const weatherController = require("./controllers/weatherController");

const app = express();

app.use(json());
app.use(cors());

app.get("/api/getWeather", weatherController.getWeather);

app.listen(3005, () => {
  console.log(`I am waiting and listening`);
});
