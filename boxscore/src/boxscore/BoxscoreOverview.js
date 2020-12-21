import React, {useMemo} from "react";
import PropTypes from "prop-types";
import {sumTotals} from "./utils"

const TeamScore = ({team, totals}) => {

    const {
        fullName
    } = team;

    // aggregate period totals
    const score = useMemo(() => {
        return sumTotals(totals) 
    }, [totals]);

    return (
        <div className="boxscore__overview__team-score">
            <h1>{score}</h1>
            <span>{fullName}</span>
        </div>
    )
}

TeamScore.propTypes = {
    team: PropTypes.object.isRequired,
    totals: PropTypes.array.isRequired
};


export const BoxscoreOverview = ({
    homeTeam,
    awayTeam,
    homePeriodScores,
    awayPeriodScores,
}) => {

    return (
        <div className="boxscore__overview">
            <TeamScore totals={homePeriodScores} team={homeTeam}/>
            <h2 className="seperator">-</h2>
            <TeamScore totals={awayPeriodScores} team={awayTeam}/>
        </div>
    )
}

BoxscoreOverview.propTypes = {
    homeTeam: PropTypes.object,
    homePeriodScores: PropTypes.array,
    awayTeam: PropTypes.object,
    awayPeriodScores: PropTypes.array
};
