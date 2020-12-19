const NodeCache = require( "node-cache" );

const feedCache = new NodeCache();

function set(key, value) {
    return feedCache.set(key, value);    
}

function get(key) {
    return feedCache.get(key);
}


module.exports = {
    get,
    set
}
