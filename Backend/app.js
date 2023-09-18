const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')
var app = express()

const router = require("./routes");

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", router);

app.listen(5000, () => {
  console.log("Server up and running on PORT:5000");
});
