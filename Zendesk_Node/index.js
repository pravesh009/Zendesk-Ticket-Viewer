const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 3000;

const fs = require("fs");
var ticket01 = {};
fs.readFile("./tickets.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const ticket = JSON.parse(jsonString);
    ticket01 = ticket;
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:1234", "http://127.0.0.1:1234"],
    credentials: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:1234");
  //res.header('Access-Control-Allow-Headers', true);
  res.header("Access-Control-Allow-Credentials", true);
  //res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/tickets", async (req, res) => {
  var response;
  //Fetching response through Zendesk API.
  try {
    response = await axios.get(
      "https://zccpjain16.zendesk.com/api/v2/tickets.json",
      {
        headers: {
          //"Content-type": "application/json; charset=UTF-8",
          Authorization:
            "Basic cGphaW4xNkBob3Jpem9uLmNzdWVhc3RiYXkuZWR1L3Rva2VuOkVBdURhbGdtTGxYWHVRcEZNTWJxNzhPZllGdlN3OURtM0FETVFjMVI=",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    //Returning response when fetching data from local tickets.json file.
    //return res.json(ticket01);
  } catch {
    return res.status(500);
  }

  return res.json(response.data);
});
