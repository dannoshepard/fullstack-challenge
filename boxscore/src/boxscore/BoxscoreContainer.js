import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import useFeed from "./useFeed";
import { BoxscoreHeader } from "./BoxscoreHeader";
import { BoxscoreOverview } from "./BoxscoreOverview";
import { BoxscorePeriodDetails } from "./BoxscorePeriodDetails";
import { BoxscoreDetailsContainer } from "./BoxscoreDetails";

const BoxscoreContainer = ({league}) => {

    console.log("rendering boxscore container")
    const feed = useFeed(league);

    if (_.isEmpty(feed)) {
        return null;
    }

    console.log("feed for ", league, feed)

    const {
        eventInformation,
        homeTeam,
        awayTeam,
        homePeriodScores,
        awayPeriodScores,
        homeBatterTotals,
        awayBatterTotals,
        homeErrors,
        awayErrors
    } = feed;

    const overviewProps = {
        homeTeam,
        awayTeam,
        homePeriodScores,
        awayPeriodScores
    }

    const periodDetailsProps = {
        league,
        homePeriodScores,
        awayPeriodScores,
        homeBatterTotals,
        awayBatterTotals,
        homeErrors,
        awayErrors
    }

    return (
        <div className="boxscore__container">
            <BoxscoreHeader eventInformation={eventInformation} league={league} /> 
            <BoxscoreOverview {...overviewProps} />
            <BoxscorePeriodDetails {...periodDetailsProps} />
            <BoxscoreDetailsContainer feed={feed} />
        </div>
    )
}

BoxscoreContainer.propTypes = {
    league: PropTypes.string.isRequired
}

export default BoxscoreContainer;
