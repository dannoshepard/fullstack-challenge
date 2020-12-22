import React from "react";
import PropTypes from "prop-types";


const NBADetailsHeader = ({teamName}) => (
    <div className="boxscore__details__container__line">
        <div className="name-column"><h3>{teamName}</h3></div>
        <div className="results-column__header"> 
            <div className="item">Pts</div>
            <div className="item">Asts</div>
            <div className="item">Rbs</div>
            <div className="item">Mins</div>
        </div>
    </div>
)

NBADetailsHeader.propTypes = {
    teamName: PropTypes.string.isRequired
}

const NBADetailsLineItem = ({
    stat
}) => {
    const {
        displayName,
        position,
        points,
        assists,
        defensiveRebounds,
        minutes
    } = stat;

    return (
        <div className="boxscore__details__container__line">
            <div className="name-column">{displayName} - {position}</div>
            <div className="results-column">
                <div className="item">{points}</div>
                <div className="item">{assists}</div>
                <div className="item">{defensiveRebounds}</div>
                <div className="item">{minutes}</div>
            </div>
        </div>
    )
}

NBADetailsLineItem.propTypes = {
    stat: PropTypes.shape({
        displayName: PropTypes.string,
        position: PropTypes.string,
        points: PropTypes.number,
        assists: PropTypes.number,
        defensiveRebounds: PropTypes.number,
        minutes: PropTypes.number
    }).isRequired
}

export const NBADetails = ({
    homeTeam,
    awayTeam,
    homeStats,
    awayStats
}) => {
    return (
        <div className="boxscore__details__container">
            
            <NBADetailsHeader teamName={homeTeam.fullName} />
            {homeStats.map((stat, index) => <NBADetailsLineItem key={`nba-details-line-item-home-${index}`} stat={stat}/>)}
            <hr/>
            
            <NBADetailsHeader teamName={awayTeam.fullName} />
            {awayStats.map((stat, index) => <NBADetailsLineItem key={`nba-details-line-item-away-${index}`} stat={stat}/>)}
        </div>
    )
}

NBADetails.propTypes = {
    homeTeam: PropTypes.shape({
        fullName: PropTypes.string.isRequired
    }),
    awayTeam: PropTypes.shape({
        fullName: PropTypes.string.isRequired
    }),
    homeStats: PropTypes.array,
    awayStats: PropTypes.array
}
