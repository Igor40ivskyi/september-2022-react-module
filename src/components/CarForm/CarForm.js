import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {carService} from "../../services";
import {useEffect} from "react";

const CarForm = ({setCars,updateCar}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all',
        resolver: joiResolver(carValidator)});

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand);
            setValue('price', updateCar.price);
            setValue('year', updateCar.year);

        }
    },[updateCar]);

    const sumbit = async (car) => {
        const {data} = await carService.create(car);
        console.log(data);
        setCars(prev => [...prev, data]);
        reset();
    };

    return (

        // <form onSubmit={handleSubmit(sumbit)}>
        //     <input type="text" placeholder={'brand'} {...register('brand',
        //         {pattern: {value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message: 'Only букви'},
        //         required:{value:true,message:'required'}
        //         })}/>
        //     {errors.brand && <span>{errors.brand.message}</span>}
        //
        //     <input type="text" placeholder={'price'} {...register('price', {
        //         valueAsNumber: true,
        //         min: {value: 1, message: 'min 1'},
        //         max: {value: 1000000, message: 'max one million'}
        //     })}/>
        //     {errors.price && <span>{errors.price.message}</span>}
        //
        //     <input type="text" placeholder={'year'} {...register('year', {
        //         valueAsNumber: true,
        //         min: {value: 1990, message: 'min Year 1990'},
        //         max: {value: new Date().getFullYear(), message: `max Year ${new Date().getFullYear()}`}
        //     })}/>
        //     {errors.year && <span>{errors.year.message}</span>}
        //
        //     <button>SAVE</button>
        // </form>

    <form onSubmit={handleSubmit(sumbit)}>
        <input type="text" placeholder={'brand'} {...register('brand',)}/>
        {errors.brand && <span>{errors.brand.message}</span>}

        <input type="text" placeholder={'price'} {...register('price', )}/>
        {errors.price && <span>{errors.price.message}</span>}

        <input type="text" placeholder={'year'} {...register('year', )}/>
        {errors.year && <span>{errors.year.message}</span>}

        <button disabled={!isValid}>{updateCar?'UPDATE':'CREATE'}</button>
    </form>

    );
};

export {CarForm};