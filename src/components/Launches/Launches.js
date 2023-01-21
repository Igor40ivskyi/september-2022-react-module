import {useEffect, useState} from "react";

import {launchesService} from "../../services";
import {Launch} from "../../components";

const Launches = () => {

    const [launches,setLaunches] = useState([]);

    useEffect(() => {
    launchesService.get('').then(value => value.data).then(value => setLaunches(value));
    },[]);

    return (
        <div>
            <h1>ROCKETS</h1>
            {launches.map((value, index) => <Launch key={index} launch={value}/>)}
        </div>
    );
};

export {Launches};