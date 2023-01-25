import {axiosService, carService} from "../../services";
import {useEffect, useState} from "react";
import {Car} from "../Car/Car";

const Cars = ({cars}) => {



    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};