require("dotenv").config();
const express = require("express");

// create instance of express app
const app = express();

// store port as variable
const port = process.env.PORT || 3001;

// routes
app.get("/api", (req, res) => {
  res.status(404).json({
    users: ["userOne", "userTwo", "userThree"],
  });
});

// tells express to listen on a specific port
app.listen(port, () => {
  // call back function
  console.log(`Server listening on ${port}!`);
});
