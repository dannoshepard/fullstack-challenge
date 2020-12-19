const express = require('express');
const { log } = require("./services/log");
const feedRoutes = require("./routes/feeds")

const port = 8000;

const app = express();


app.get('/', (req, res) => {
    res.send('Hello from Boxscore API!');
});

// register routes
app.use("/api", feedRoutes)

// start server
app.listen(port, () => {
    log.info(`Boxscore API listening on port ${port}!`)
});

