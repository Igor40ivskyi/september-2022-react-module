import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {AboutPage, NotFoundPage, PostsDetailsPage, PostsPage, UsersPage} from "./pages";
import {Header} from "./components/Header/Header";
import {MainLayout} from "./layouts";
import {PostDetails} from "./components";

const App = () => {
    return (
        <div>

            <Routes>

                <Route path={'/'} element={<MainLayout/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}>

                    <Route path={':postId'} element={<PostsDetailsPage/>}/>
                    </Route>


                    <Route path={'about'} element={<AboutPage/>}/>
                </Route>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
};

export {App};