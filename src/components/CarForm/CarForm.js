import {useForm} from "react-hook-form";

const CarForm = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all'});

    return (
        <div>
            CarForm
        </div>
    );
};

export {CarForm};