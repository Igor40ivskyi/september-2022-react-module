import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/Mainlayout/MainLayout";
import {AlbumsPage, CommentsPage, HomePage, TodosPage} from "./pages";
import {Header} from "./components/Header/Header";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {PostRelated} from "./components";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>

                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<PostRelated/>}/>
                    </Route>


                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Route>
            </Routes>

        </div>
    );
};

export {App};