const express = require('express');
const axios = require('axios');
const app = express();
const $PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// basic route set up
app.get('/', (req, res, next) => {
  try {
    res.send('response is working!');
  } catch (error) {
    next(error);
  }
});

app.get('/brunch', async (req, res, next) => {
  try {
    const brunch = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto/');
    console.log('pokemon data', brunch);
    res.send();
  } catch (error) {
    next(error);
  }
});

app.listen($PORT, () => {
  console.log('server is listening at ', $PORT);
});
