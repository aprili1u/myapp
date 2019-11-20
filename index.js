//Import library

const express = require("express");

//use default PORT or given by platform.
const PORT = process.env.PORT || 80;

//Create application
const app = express();

//some basic route
app.get("/", (req, res) => {
  //send response.
  res.json({ message: "coucou", tile: "coucou" });
});

//Start server.

app.listen(PORT, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.info("Ser started.");
});
