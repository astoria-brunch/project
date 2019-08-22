const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const $PORT = process.env.PORT || 5000;
// middlewares
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// basic route set up

app.get('/brunch', async (req, res, next) => {
  try {
    const brunch = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto/');
    console.log('pokemon data', brunch);
    res.send();
  } catch (error) {
    next(error);
  }
});
app.get('*', (req, res) => {
  try {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  } catch (error) {
    next(error);
  }
});

app.listen($PORT, () => {
  console.log('server is listening at ', $PORT);
});
