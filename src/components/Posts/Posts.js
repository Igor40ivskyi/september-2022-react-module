import {useEffect} from "react";
import {postsService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {postsActions} from "../../redux/slices/postsSlice";
import {Post} from "../Post/Post";

const Posts = () => {

    const {posts} = useSelector(state => state.posts);
    console.log(posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(postsActions.getAllPosts());
    },[]);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};