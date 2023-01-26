import {Car} from "../Car/Car";

const Cars = ({cars,setUpdateCar}) => {



    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value} setUpdateCar={setUpdateCar}/>)}
        </div>
    );
};

export {Cars};