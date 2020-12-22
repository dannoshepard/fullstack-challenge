import React from "react";
import _ from "lodash";
import useFeed, {NBA, MLB} from "./useFeed";
import { BoxscoreHeader } from "./BoxscoreHeader";
import { BoxscoreOverview } from "./BoxscoreOverview";
import { BoxscorePeriodDetails } from "./BoxscorePeriodDetails";
import { BoxscoreDetailsContainer } from "./BoxscoreDetails";

const BoxscoreContainer = () => {

    const feed = useFeed(MLB);

    if (_.isEmpty(feed)) {
        return null;
    }

    const {
        eventInformation,
        league,
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

BoxscoreContainer.propTypes = {}

export default BoxscoreContainer;
