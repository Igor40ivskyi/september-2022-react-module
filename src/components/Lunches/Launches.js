import {useEffect, useState} from "react";
import {Launch} from "../Launch/Launch";

const Launches = () => {

    const [launches,setLaunches] = useState(null);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/').then(value => value.json()).then(value => setLaunches(value));
    },[]);

    return (
        <div>
            {launches && launches.map((launch,index)=> <Launch key={index} launch={launch}/>)}
        </div>
    );
};

export {Launches};