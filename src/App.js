import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRequireLayout, MainLayout} from "./layouts";
import {Cars} from "./components";
import {CarsPage, LoginPage, RegisterPage} from "./pages";
import {createContext, useState} from "react";
import {current} from "@reduxjs/toolkit";

export const ThemeContext = createContext(null);

const App = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(current => current === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'cars'}/>}/>

                    <Route element={<AuthRequireLayout/>}>
                        <Route path={'cars'} element={<CarsPage/>}/>
                    </Route>

                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'register'} element={<RegisterPage/>}/>
                </Route>
            </Routes>
        </ThemeContext.Provider>
    );
};

export {App};
