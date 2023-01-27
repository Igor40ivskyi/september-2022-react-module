import './Car.css';
import {carService} from "../../services";

const Car = ({car,setUpdateCar,setCars}) => {
    const {id,brand, price, year} = car;


    return (
        <div>
            <div className={'carCard'}>

                <div>id {id}</div>
                <div className={'carField'}>brand {brand}</div>
                <div className={'carField'}>price {price}</div>
                <div className={'carField'}>year {year}</div>

                <button onClick={() => setUpdateCar(car)}>UPDATE</button>

                <button onClick={() => {
                    carService.delete(id).then(async () => {
                        const {data} = await carService.getAll();
                        setCars([...data])
                    }).catch(err=> console.log(err))
                }}>DELETE
                </button>

            </div>

        </div>
    );
};

export {Car};