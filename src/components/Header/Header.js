import './Header.css'
import {NavLink} from "react-router-dom";

import ReactSwitch from "react-switch";
import {useContext} from "react";
import {ThemeContext} from "../../App";

const Header = () => {

    const {theme,toggleTheme} = useContext(ThemeContext);

    return (
        <div className={"Header"}>

            <div className={'switch'}>
                <label>{theme === 'light'?'Light Mode' : 'Dark Mode'}</label>
                <ReactSwitch checked={theme === 'light'} onChange={toggleTheme}/>
            </div>

            <div>
                <NavLink to={'login'}>LOGIN</NavLink>
                <NavLink to={'/register'}>REGISTER</NavLink>
            </div>
        </div>
    );
};

export {Header};