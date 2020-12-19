const axios = require('axios');
const _ = require('lodash');
const cache = require('./cache');
const { log } = require("./log");


const MLB_FEED = "https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json";
const NBA_FEED = "https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json";

const EXPIRES_IN_MINUTES = 15;

async function getFeed(feed) {
    const cachedFeed = cache.get(feed);
    if (_.isEmpty(cachedFeed) || expired(cachedFeed.lastUpdated) ) {
        log.info(`caching new feed value from url... ${feed}`);
        
        let latestFeed = {};
        try {
            const response = await axios.get(feed);
            latestFeed = await response.data;
        } catch (e) {
            log.error(e);
            return latestFeed;
        }

        const cacheValue = {
            ...latestFeed,
            lastUpdated: Date.now()
        };

        cache.set(feed, cacheValue);

        return latestFeed;
    }

    return cachedFeed;
}

function expired(date) {
    return date < Date.now() - EXPIRES_IN_MINUTES * 60 * 1000;
}


module.exports = {
    getFeed,
    MLB_FEED,
    NBA_FEED
}