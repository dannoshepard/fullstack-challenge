const express = require('express')
const router = express.Router()

const {getFeed, MLB_FEED, NBA_FEED} = require('../services/feeds');
const { log } = require("../services/log");

router.get('/feed/nba', async (req, res) => {
    log.info("received request for nba feed");

    res.send(await getFeed(NBA_FEED));
})

router.get('/feed/mlb', async (req, res) => {
    log.info("received request for mlb feed");

    res.send(await getFeed(MLB_FEED));
})

module.exports = router