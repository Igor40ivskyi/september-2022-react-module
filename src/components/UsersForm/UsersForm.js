import './UsersForm.css';
import {useForm} from "react-hook-form";
import {usersService} from "../../services";

const UsersForm = () => {

    const {register,handleSubmit,reset,formState:{errors,isValid},} = useForm({mode: 'all'});

    const submit = (data) => {
        usersService.create(data).then(({data})=> console.log(data))
    };

    return (

        <form onSubmit={handleSubmit(submit)}>
            <div className={'inputsDiv'}>
                <input className={'regularInput'} type="text" placeholder={'name'} {...register('name')}/>
                <input className={'regularInput'} type="text" placeholder={'username'} {...register('username')}/>
                <button className={'regularButton'}>CREATE NEW USER</button>
            </div>

        </form>
    );
};

export {UsersForm};