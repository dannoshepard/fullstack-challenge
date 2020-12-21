import React from "react";
import _ from "lodash";
import useFeed, {NBA, MLB} from "./useFeed";
import { BoxscoreHeader } from "./BoxscoreHeader";
import { BoxscoreOverview } from "./BoxscoreOverview";
import { BoxscorePeriodDetails } from "./BoxscorePeriodDetails";

const BoxscoreContainer = () => {

    const feed = useFeed(NBA);

    if (_.isEmpty(feed)) {
        return null;
    }

    const {
        eventInformation,
        league,
        homeTeam,
        awayTeam,
        homeStats,
        awayStats,
        homePeriodScores,
        awayPeriodScores,
    } = feed;

    const overviewProps = {
        homeTeam,
        awayTeam,
        homePeriodScores,
        awayPeriodScores
    }

    const periodDetailsProps = {
        homePeriodScores,
        awayPeriodScores,
        homeStats,
        awayStats
    }

    return (
        <div className="boxscore__container">
            <BoxscoreHeader eventInformation={eventInformation} league={league} /> 
            <BoxscoreOverview {...overviewProps} />
            <BoxscorePeriodDetails {...periodDetailsProps} />
        </div>
    )
}

BoxscoreContainer.propTypes = {}

export default BoxscoreContainer;
