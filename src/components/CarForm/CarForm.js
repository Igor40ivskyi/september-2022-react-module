import {set, useForm} from "react-hook-form";
import {carService} from "../../services";
import {useEffect} from "react";

const CarForm = ({setCars,updateCar}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all'});


    useEffect(() => {
        if (updateCar) {

        setValue('brand', updateCar.brand);
        setValue('price', updateCar.price);
        setValue('year', updateCar.year);
        }
    },[updateCar]);

    const submit = async (car) => {
        const {data} = await carService.create(car);
        setCars(prev => [...prev, data]);
        console.log(data);
        reset()
    };

    const update = async (car) => {
        const {data} = await carService.update(updateCar.id, car);
        if (Object.keys(data).length) {
            const {data} = await carService.getAll();
            setCars(data);
            reset()
        }
    };

    return (
        <form onSubmit={handleSubmit(updateCar?update:submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="number" placeholder={'price'} {...register('price')}/>
            <input type="number" placeholder={'year'} {...register('year')}/>
            <button>{updateCar?'UPDATE':'CREATE'}</button>
        </form>
    );
};

export {CarForm};