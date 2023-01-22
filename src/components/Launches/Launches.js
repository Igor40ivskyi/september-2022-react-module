import {useEffect, useState} from "react";
import {launchesService} from "../../services";
import {Launch} from "../Launch/Launch";

const Launches = () => {


    const [launches,setLaunches] = useState([]);

    useEffect(() => {
        launchesService.then(value => value.data).then(value => setLaunches(value));
    },[]);

    return (
        <div>
            {launches.map((value, index) => <Launch key={index} launch={value}/>)}
        </div>
    );
};

export {Launches};