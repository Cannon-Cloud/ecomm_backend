const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//server app

const app = express();

//DataBase connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DATABASE CONNECTED!"))
  .catch((err) => console.log(`DB CONNECTION ERROR ${err}`));

//Middleware

app.use(morgan("dev"));
app.use(bodyParser.json()); // can set limit to 2mb say limit: "2mb"
app.use(cors());

//routes
app.get("/api", (req, res) => {
  res.json({
    data: "hey you hit node API",
  });
});

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
