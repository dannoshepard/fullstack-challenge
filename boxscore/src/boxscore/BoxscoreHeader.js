import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import _ from "lodash";

export const BoxscoreHeader = ({eventInformation, league}) => {

    if (_.isEmpty(eventInformation) || _.isEmpty(league)) {
        return null;
    }

    const {
        start_date_time,
        status
    } = eventInformation;

    return (
        <div className="boxscore__header">
            <span>{league} - {moment(start_date_time).format('ddd, MM/DD')}</span>
            <span>{status === "completed" ? "Final" : "In Progress"}</span>
        </div>
    );
};

BoxscoreHeader.propTypes = {
    eventInformation: PropTypes.object,
    league: PropTypes.string
}

