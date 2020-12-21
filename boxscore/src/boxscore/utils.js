import _ from "lodash";

export const sumTotals = (totals) => 
    _.reduce(totals, (sum, n) => { 
        return sum + n; 
    }, 0);

