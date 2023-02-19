import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <div>
                <NavLink to={'login'}>LOGIN</NavLink>
                <NavLink to={'/register'}>REGISTER</NavLink>
            </div>
        </div>
    );
};

export {Header};