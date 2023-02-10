import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import {Post} from "../Post/Post";
import {postActions} from "../../redux/slices/postsSlice";

const Posts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.getAll());
    },[]);

    const {posts,loading,selectedPost} = useSelector(state => state.posts);

    return (
        <div>
            <hr/>

            <div style={{display: "flex"}}>

                <div style={{maxWidth: 900, paddingLeft: 40}}>
                    {posts.map(post => <Post key={post.id} post={post}/>)}
                </div>

                <div style={{fontSize:30,paddingTop:100,paddingRight:200,marginLeft:100}}>
                    {selectedPost && selectedPost.title}
                </div>

            </div>
        </div>
    );
};

export {Posts};