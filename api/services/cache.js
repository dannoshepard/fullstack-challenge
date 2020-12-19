const NodeCache = require( "node-cache" );
const { log } = require("./log");


const feedCache = new NodeCache();

function set(key, value) {
    try {
        log.info("Storing new value in cache...")
        return feedCache.set(key, value);    
    } catch (e) {
        log.error(`Error caching value for key ${key}... ${e}`)
    }
}

function get(key) {
    return feedCache.get(key);
}


module.exports = {
    get,
    set
}
