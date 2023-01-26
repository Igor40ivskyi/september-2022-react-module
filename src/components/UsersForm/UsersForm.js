import './UsersForm.css';

const UsersForm = () => {
    return (

        <form>
            <div className={'inputsDiv'}>
            <input className={'regularInput'} type="text" placeholder={'name'}/>
            <input className={'regularInput'} type="text" placeholder={'name'}/>
            <input className={'regularInput'} type="text" placeholder={'name'}/>
            <input className={'regularInput'} type="text" placeholder={'name'}/>
            <input className={'regularInput'} type="text" placeholder={'name'}/>
            <input className={'regularInput'} type="text" placeholder={'name'}/>

            </div>

        </form>
    );
};

export {UsersForm};