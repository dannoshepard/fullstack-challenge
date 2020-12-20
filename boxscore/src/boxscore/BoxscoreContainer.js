import React from "react";
import useFeed from "./useFeed";

const BoxscoreContainer = () => {

    const {
        nbaFeed,
        mlbFeed
    } = useFeed()

    return (
        <div className="test">
            {JSON.stringify(nbaFeed)}
            {JSON.stringify(mlbFeed)}
        </div>
    )
}

BoxscoreContainer.propTypes = {}

export default BoxscoreContainer;
