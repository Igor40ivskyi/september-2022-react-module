import css from '../Todo/Todo.module.css'
import {NavLink} from "react-router-dom";

const Comment = ({comment}) => {

    const {id, name, postId, email, body} = comment;

    return (
        <div className={css.Todo}>
            <div>id {id}</div>
            <div>name {name}</div>
            <div>postId {postId}</div>
            <div>email {email}</div>
            <div>body {body}</div>
        </div>
    );
};

export {Comment};