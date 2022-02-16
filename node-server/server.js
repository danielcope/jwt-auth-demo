require("dotenv").config();

const express = require("express");
const massive = require("massive");

const app = express();
const authCtrl = require("./controllers/authCtrl");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.get("/hit", authCtrl.something);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((dbInst) => {
    app.set("db", dbInst);

    app.listen(SERVER_PORT, () =>
      console.log(`Server running on port` + " " + SERVER_PORT)
    );
  })
  .catch((err) => console.log(err));
