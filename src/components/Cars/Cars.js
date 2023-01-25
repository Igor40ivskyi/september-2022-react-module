import {useEffect, useState} from "react";
import {carService} from "../../services";

const Cars = () => {

    const [cars, setCars] = useState([]);
    console.log(cars);
    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    },[]);


    return (
        <div>
            Cars
        </div>
    );
};

export {Cars};