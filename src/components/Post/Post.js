import {useDispatch} from "react-redux";
import {postsActions} from "../../redux/slices/postsSlice";

const Post = ({post}) => {
    const {userId, id, title, body} = post;

    const dispatch = useDispatch();
    return (
        <div>
            <div>userId {userId}</div>
            <div>id {id}</div>
            <div>title {title}</div>
            <div>body {body}</div>
            <button onClick={()=>dispatch(postsActions.saveSelectedPost(post))}>select post</button>
            <button onClick={()=>dispatch(postsActions.getSelectedPost({id}))}>API select post</button>

        </div>
    );
};

export {Post};