import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {AboutPage, PostsPage, UsersPage} from "./pages";
import {Header} from "./components/Header/Header";
import {MainLayout} from "./layouts";

const App = () => {
    return (
        <div>

            <Routes>

                <Route path={'/'} element={<MainLayout/>}>

                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'about'} element={<AboutPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};