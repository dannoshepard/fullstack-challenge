import React from "react";
import useFeed, {NBA} from "./useFeed";
import { BoxscoreHeader } from "./BoxscoreHeader";
import { BoxscoreOverview } from "./BoxscoreOverview";

const BoxscoreContainer = () => {

    const {
        eventInformation,
        league,
        homeTeam,
        awayTeam,
        homeStats,
        awayStats,
        homePeriodScores,
        awayPeriodScores,
        homeTotals,
        awayTotals
    } = useFeed(NBA)

    const overviewProps = {
        homeTeam,
        awayTeam,
        homeStats,
        awayStats,
        homePeriodScores,
        awayPeriodScores,
        homeTotals,
        awayTotals
    }

    return (
        <div className="boxscore__container">
            <BoxscoreHeader eventInformation={eventInformation} league={league} /> 
            <BoxscoreOverview {...overviewProps} />
        </div>
    )
}

BoxscoreContainer.propTypes = {}

export default BoxscoreContainer;
