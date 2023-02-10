import {Post} from "../Post/Post";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postActions} from "../../redux/slices/postsSlice";

const Posts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.getAll());
    },[]);

    const {posts,loading} = useSelector(state => state.posts);

    return (
        <div>
            <hr/>
            {loading && <h1>LOADING...</h1>}
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};