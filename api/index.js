const express = require('express');
const { log } = require("./services/log");
const { feedEndpoints } = require("./endpoints/feeds")

const app = express();
const port = 8000;


app.get('/', (req, res) => {
  res.send('Hello from Boxscore API!');
});

app.listen(port, () => {
    // register endpoints
    feedEndpoints(app)

    log.info(`Boxscore API listening on port ${port}!`)
});

