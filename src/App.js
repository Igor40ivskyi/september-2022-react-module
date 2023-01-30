import {Route, Routes} from "react-router-dom";
import {AlbumsPage} from "./pages";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {TodosPage} from "./pages/TodosPage/TodosPage";
import {HomePage} from "./pages/HomePage/HomePage";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {PostRelated} from "./components/PostRelated/PostRelated";

const App = () => {
    return (
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
    );
};

export {App};