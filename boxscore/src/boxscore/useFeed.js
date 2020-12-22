import {useEffect, useState} from "react";
import {axiosInstance} from "../App";

// leagues
export const NBA = "NBA";
export const MLB = "MLB";

const MLB_FEED = "/feed/mlb";
const NBA_FEED = "/feed/nba";

const useFeed = (league) => {
    const [feed, setFeed] = useState({});

    useEffect(() => {
        async function fetchData(url) {
            const result = await axiosInstance.get(url)
            setFeed(result.data);
        };

        switch (league) {
            case NBA:
                fetchData(NBA_FEED);
                break;
            case MLB:
                fetchData(MLB_FEED);
                break
            default:
                // do nothing
        }
    }, [league])
   
    return feed
};

export default useFeed