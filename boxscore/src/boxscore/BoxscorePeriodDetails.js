import React, { useMemo } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { sumTotals } from "./utils";

const Period = ({
    index,
    homeScore,
    awayScore
}) => {
    return (
        <div className="boxscore__period">
            <div className="boxscore__period__index">{index}</div>
            <div className="boxscore__period__homescore">{homeScore}</div>
            <div className="boxscore__period__awayscore">{awayScore}</div>
        </div>
    )
}

Period.propTypes = {
    index: PropTypes.number.isRequired,
    homeScore: PropTypes.number.isRequired,
    awayScore: PropTypes.number.isRequired
};


export const BoxscorePeriodDetails = ({
    homePeriodScores,
    awayPeriodScores,
    homeStats,
    awayStats
}) => {

    console.log(homeStats, awayStats)

    const zippedScores = useMemo(() => {
        return _.zip(homePeriodScores, awayPeriodScores);
    }, [homePeriodScores, awayPeriodScores])

    const homeTotal = useMemo(() => {
        return sumTotals(homePeriodScores);
    }, [homePeriodScores]);

    const awayTotal = useMemo(() => {
        return sumTotals(awayPeriodScores);
    }, [awayPeriodScores]);

    return (
        <div className="boxscore__period__container">
            {zippedScores.map((scores, index) => (
                <Period key={`${index}-${scores[0]}-${scores[1]}`} 
                    index={index} 
                    homeScore={scores[0]} 
                    awayScore={scores[1]} 
                />
            ))}
            <Period index="T" homeScore={homeTotal} awayScore={awayTotal} />
        </div>
    )
};

BoxscorePeriodDetails.propTypes = {
    homePeriodScores: PropTypes.array,
    awayPeriodScores: PropTypes.array,
    homeStats: PropTypes.array,
    awayStats: PropTypes.array
}