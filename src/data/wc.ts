import React, { useEffect, useState } from 'react';
import axios from "axios";


const Venues = () => {

    const [venues, setVenues] = useState([])

    useEffect(() => {
      axios
        .get("http://localhost/live-events/wp-json/tribe/events/v1/venues")
        .then((res) => {
          const data = res.data
          setVenues(data.venues);
        });
    }, [])

console.log(venues);


    return venues
};


type RawWc = [string, string, number, number];

type Wc = {
    key:string;
    name:string;
    category:string;
    lat:number;
    lng:number;
};


const wcs: RawWc[] = [
    ["WC 1", "wc", 48.85892227519203, 2.232077827194243],
    ["WC 2", "wc", 48.85543869637124, 2.2326754299229856],
];

const formatted: Wc[] = wcs.map(([name, category, lat, lng]) => ({
    name,
    category,
    lat,
    lng,
    key:JSON.stringify({name, category, lat, lng}),
}));

export default formatted;