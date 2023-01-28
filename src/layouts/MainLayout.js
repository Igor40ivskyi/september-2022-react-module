import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div>
            <Outlet/>
            <Header/>
        </div>
    );
};

export {MainLayout};