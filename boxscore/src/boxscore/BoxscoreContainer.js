import React from "react";
import useFeed from "./useFeed";

const BoxscoreContainer = () => {

    const {
        nbaFeed,
        mlbFeed
    } = useFeed()

    return (
        <div>
            {JSON.stringify(nbaFeed)}
            {JSON.stringify(mlbFeed)}
        </div>
    )
}

BoxscoreContainer.propTypes = {}

export default BoxscoreContainer;
