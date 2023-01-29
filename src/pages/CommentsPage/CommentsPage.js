
import {Comments} from "../../components";
import {Outlet} from "react-router-dom";

import css from './CommentsPage.module.css'

const CommentsPage = () => {
    return (
        <div className={css.CommentsPage}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};