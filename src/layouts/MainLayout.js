import {Outlet} from "react-router-dom";
import {Header} from "../components";

import './MainLayout.css'
import {useContext} from "react";
import {ThemeContext} from "../App";

const MainLayout = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div id={theme}>
            MainLayout
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};