import {useEffect, useState} from "react";
import {axiosInstance} from "../App";

const MLB_FEED = "/feed/mlb";
const NBA_FEED = "/feed/nba";

const useFeed = () => {
    const [mlbFeed, setMlbFeed] = useState({});
    const [nbaFeed, setNbaFeed] = useState({});

    useEffect(() => {
        async function fetchData() {
            const feed = await axiosInstance.get(MLB_FEED)
            setMlbFeed(feed);
        };
        fetchData();
    }, [])

    useEffect(() => {
        async function fetchData() {
            const feed = await axiosInstance.get(NBA_FEED)
            setNbaFeed(feed);
        };
        fetchData();
    }, [])


    return {
        mlbFeed,
        nbaFeed
    }
};

export default useFeed