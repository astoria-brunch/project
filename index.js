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

const APIKey =
  'Bearer ' +
  'FyzJFB01i42g9yLpWYqY9rxMjmHeRH3Nz_5jXamI1CvVAZDVx-MjcXwzHSdxBkcgfrXphznltrGah2jKuoNrennGHbva6pTdEItKZFJcbVso9JyY2f1tOUpZ7BYdXXYx';
// basic route set up

// temp brunch data route * need to move APIKey to env var so that heroku allows access
app.get('/brunch', async (req, res, next) => {
  try {
    const response = await axios.get(
      'https://api.yelp.com/v3/businesses/search?location=astoria&categories=breakfast_brunch',
      {
        headers: {
          Authorization: APIKey,
        },
      }
    );
    console.log('data', response.data);
    res.json(response.data);
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
