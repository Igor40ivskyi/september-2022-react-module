import {CarForm,Cars} from "./components";
import {useEffect, useState} from "react";
import {carService} from "./services";
import axios from "axios";

const App = () => {

    const [cars, setCars] = useState([]);
    const [updateCar,setUpdateCar] = useState(null);

    axios.delete('http://owu.linkpc.net/carsAPI/v1/cars/644');

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    },[]);

    return (
        <div>
            <CarForm setCars={setCars} updateCar={updateCar}/>
            <hr/>
            <Cars cars={cars} setUpdateCar={setUpdateCar}/>
        </div>
    );
};

export {App};