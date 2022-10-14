require("dotenv").config();
const express = require("express");

// create instance of express app
const app = express();

// store port as variable
const port = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(port, () => {
  // call back function
  console.log(`Server listening on ${port}!`);
});
