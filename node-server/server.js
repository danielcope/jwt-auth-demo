require("dotenv").config();

const express = require("express");
const app = express();
const authCtrl = require("./controllers/authCtrl");

const { SERVER_PORT } = process.env;

app.get("/hit", authCtrl.hit);

app.listen(SERVER_PORT, () => {
  console.log(`Server running on ${SERVER_PORT}`);
});
