const express = require("express");
const app = express();
const $PORT = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
  try {
    res.send("response is working!");
  } catch (error) {
    next(error);
  }
});

app.listen($PORT, () => {
  console.log("server is listening at ", $PORT);
});
