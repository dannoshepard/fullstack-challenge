import React from "react";
import PropTypes from "prop-types";
import useFeed from "./useFeed";

const BoxscoreContainer = () => {

    const {
        nbaFeed,
        mlbFeed
    } = useFeed()

    return (
        <div>
            {nbaFeed}
            {mlbFeed}
        </div>
    )
}

BoxscoreContainer.propTypes = {}

export default BoxscoreContainer;
