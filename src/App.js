import {CarForm,Cars} from "./components";
import {useEffect, useState} from "react";
import {carService} from "./services";

const App = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    },[]);

    return (
        <div>
            <CarForm setCars={setCars}/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {App};