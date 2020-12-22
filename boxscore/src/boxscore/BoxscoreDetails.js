import React from "react";
import PropTypes from "prop-types";
import { NBA, MLB } from "./useFeed";
import { NBADetails } from "./details/NBADetails";
import { MLBDetails } from "./details/MLBDetails";

export const BoxscoreDetailsContainer = ({feed}) => {
    const {
        league,
        homeTeam,
        awayTeam,
        homeBatters,
        awayBatters,
        homePitchers,
        awayPitchers,
        homeStats,
        awayStats
    } = feed;

    switch(league){
        case NBA:
            return <NBADetails 
                        homeStats={homeStats} 
                        awayStats={awayStats} 
                        homeTeam={homeTeam}
                        awayTeam={awayTeam}
                    />
        case MLB:
            return <MLBDetails 
                        homeBatters={homeBatters}
                        awayBatters={awayBatters}
                        homePitchers={homePitchers}
                        awayPitchers={awayPitchers}
                        homeTeam={homeTeam}
                        awayTeam={awayTeam}
                    />
        default:
            return null

    }
}

BoxscoreDetailsContainer.propTypes = {
    feed: PropTypes.object
}