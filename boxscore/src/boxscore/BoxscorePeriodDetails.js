import React, { useMemo } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { sumTotals } from "./utils";
import { MLB, NBA } from "./useFeed";

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

const MLBTotals = ({
    homeTotal,
    awayTotal,
    homeHits,
    awayHits,
    homeErrors,
    awayErrors
}) => {
    return (
    <>
        <div className="border-left">
            <Period index="R" homeScore={homeTotal} awayScore={awayTotal} />
        </div>
        <Period index="H" homeScore={homeHits} awayScore={awayHits} />
        <Period index="E" homeScore={homeErrors} awayScore={awayErrors} />
    </>
)}

MLBTotals.propTypes = {
    homeTotal: PropTypes.number.isRequired,
    awayTotal: PropTypes.number.isRequired,
    homeHits: PropTypes.number.isRequired,
    awayHits: PropTypes.number.isRequired,
    homeErrors: PropTypes.number.isRequired,
    awayErrors: PropTypes.number.isRequired
}


const NBATotals = ({
    homeTotal,
    awayTotal,
}) => <div className="border-left">
        <Period index="T" homeScore={homeTotal} awayScore={awayTotal} />    
    </div>

NBATotals.propTypes = {
    homeTotal: PropTypes.number.isRequired,
    awayTotal: PropTypes.number.isRequired
}

Period.propTypes = {
    index: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
    homeScore: PropTypes.number.isRequired,
    awayScore: PropTypes.number.isRequired
};


export const BoxscorePeriodDetails = ({
    league,
    homePeriodScores,
    awayPeriodScores,
    homeBatterTotals,
    awayBatterTotals,
    homeErrors,
    awayErrors
}) => {

    const zippedScores = useMemo(() => {
        return _.zip(homePeriodScores, awayPeriodScores);
    }, [homePeriodScores, awayPeriodScores])

    const homeTotal = useMemo(() => {
        return sumTotals(homePeriodScores);
    }, [homePeriodScores]);

    const awayTotal = useMemo(() => {
        return sumTotals(awayPeriodScores);
    }, [awayPeriodScores]);

    const totals = useMemo(() => {
        switch (league) {
            case MLB:
                const mlbTotalsProps = {
                    homeTotal, 
                    awayTotal, 
                    homeErrors, 
                    awayErrors,
                    homeHits: homeBatterTotals.hits, 
                    awayHits: awayBatterTotals.hits, 
                }
                return <MLBTotals {...mlbTotalsProps} />
            case NBA:
                return <NBATotals homeTotal={homeTotal} awayTotal={awayTotal} />
            default:
                return null;

        }
    }, [league, homeTotal, awayTotal, homeBatterTotals, awayBatterTotals, homeErrors, awayErrors])

    return (
        <div className="boxscore__period__container">
            {zippedScores.map((scores, index) => (
                <Period key={`${index}-${scores[0]}-${scores[1]}`} 
                    index={index} 
                    homeScore={scores[0]} 
                    awayScore={scores[1]} 
                />
            ))}
            {totals}
        </div>
    )
};

BoxscorePeriodDetails.propTypes = {
    homePeriodScores: PropTypes.array,
    awayPeriodScores: PropTypes.array,
    homeStats: PropTypes.array,
    awayStats: PropTypes.array
}