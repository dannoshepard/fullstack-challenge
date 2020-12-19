const {getFeed, MLB_FEED, NBA_FEED} = require('../services/feeds');
const { log } = require("../services/log");


function feedEndpoints(app) {
    log.info("Registering feed endpoints...");

    app.get('feed/nba', async (req, res) => {
        log.info("received request for nba feed");
    
        res.send(await getFeed(NBA_FEED));
    })
    
    app.get('feed/mlb', async (req, res) => {
        log.info("received request for mlb feed");
    
        res.send(await getFeed(MLB_FEED));
    })
};

module.exports = {
    feedEndpoints
};