import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/postsService";

const PostRelated = () => {

    const {postId} = useParams();

    console.log(postId);

    const [post,setPost] = useState([]);

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data));
    },[]);


    return (
        <div>
            {post &&
                <div>
                    <div>USER ID {post.userId}</div>
                    <div>ID {post.id}</div>
                    <div>TITLE {post.title}</div>
                    <div>BODY {post.body}</div>

                </div>}
        </div>
    );
};

export {PostRelated};