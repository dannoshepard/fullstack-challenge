import React from "react";
import PropTypes from "prop-types";

const MLBDetailsBatterHeader = ({
    teamName
}) => (
    <div className="boxscore__details__container__line">
        <div className="name-column"><h3>{teamName}</h3></div>
        <div className="results-column__header"> 
            <div className="item">AB</div>
            <div className="item">R</div>
            <div className="item">H</div>
            <div className="item">BB</div>
            <div className="item">RBI</div>
        </div>
    </div>
)

MLBDetailsBatterHeader.propTypes = {
    teamName: PropTypes.string.isRequired
}

const MLBDetailsBatterLineItem = ({
    stat
}) => {
    const {
        displayName,
        position,
        atBats,
        runs,
        hits,
        walks,
        rbi
    } = stat;

    return (
        <div className="boxscore__details__container__line">
            <div className="name-column">{displayName} - {position}</div>
            <div className="results-column">
                <div className="item">{atBats}</div>
                <div className="item">{runs}</div>
                <div className="item">{hits}</div>
                <div className="item">{walks}</div>
                <div className="item">{rbi}</div>
            </div>
        </div>
    )
}

MLBDetailsBatterLineItem.propTypes = {
    stat: PropTypes.shape({
        displayName: PropTypes.string,
        position: PropTypes.string,
        atBats: PropTypes.number,
        runs: PropTypes.number,
        hits: PropTypes.number,
        walks: PropTypes.number,
        rbi: PropTypes.number
    }).isRequired
}



const MLBDetailsPitcherHeader = () => (
    <div className="boxscore__details__container__line">
        <div className="name-column"></div>
        <div className="results-column"> 
            <div className="item">IP</div>
            <div className="item">H</div>
            <div className="item">ER</div>
            <div className="item">BB</div>
            <div className="item">SO</div>
        </div>
    </div>
)

const MLBDetailsPitcherLineItem = ({
    stat
}) => {
    const {
        displayName,
        inningsPitched,
        earnedRuns,
        walks,
        errors,
        strikeOuts
    } = stat;

    return (
        <div className="boxscore__details__container__line">
            <div className="name-column">{displayName} - P</div>
            <div className="results-column">
                <div className="item">{inningsPitched}</div>
                <div className="item">{earnedRuns}</div>
                <div className="item">{walks}</div>
                <div className="item">{errors}</div>
                <div className="item">{strikeOuts}</div>
            </div>
        </div>
    )
}

MLBDetailsPitcherLineItem.propTypes = {
    stat: PropTypes.shape({
        displayName: PropTypes.string,
        inningsPitched: PropTypes.number,
        earnedRuns: PropTypes.number,
        walks: PropTypes.number,
        errors: PropTypes.number,
        strikeOuts: PropTypes.number
    }).isRequired
}


export const MLBDetails = ({
    homeTeam,
    awayTeam,
    homeBatters,
    awayBatters,
    homePitchers,
    awayPitchers
}) => {
    return (
        <div className="boxscore__details__container">
            <MLBDetailsBatterHeader teamName={homeTeam.fullName} />
            {homeBatters.map((stat, index) => 
                <MLBDetailsBatterLineItem 
                    key={`mlb-batter-details-home-${index}`} 
                    stat={stat}/>
                )}
            <hr/>
            
            <MLBDetailsPitcherHeader/>
            {homePitchers.map((stat, index) => 
            <MLBDetailsPitcherLineItem 
                key={`mlb-pitcher-details-home-${index}`}
                stat={stat}/>
            )}
            <hr/>
            
            <MLBDetailsBatterHeader teamName={awayTeam.fullName}/>
            {awayBatters.map((stat, index) => 
            <MLBDetailsBatterLineItem 
                key={`mlb-batter-details-away-${index}`} 
                stat={stat}/>
            )}
            <hr/>
            
            <MLBDetailsPitcherHeader/>
            {awayPitchers.map((stat, index) => 
            <MLBDetailsPitcherLineItem 
                key={`mlb-pitcher-details-away-${index}`} 
                stat={stat}/>
            )}
        </div>
    )
}

MLBDetails.propTypes = {
    homeTeam: PropTypes.shape({
        fullName: PropTypes.string.isRequired
    }),
    awayTeam: PropTypes.shape({
        fullName: PropTypes.string.isRequired
    }),
    homeBatters: PropTypes.array,
    awayBatters: PropTypes.array,
    homePitchers: PropTypes.array,
    awayPitchers: PropTypes.array
}

