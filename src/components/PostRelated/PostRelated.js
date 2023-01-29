import css from './PostRelated.module.css'

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/postsService";

const PostRelated = () => {

    const {postId} = useParams();


    const [post,setPost] = useState(null);

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data));
    },[postId]);



    return (
        <div>
            {post &&
                    <div className={css.PostRelated}>
                        <div>ID {post.id}</div>
                        <div>userID {post.userId}</div>
                        <div>TITLE {post.title}</div>
                        <div>BODY {post.body}</div>
                    </div>

            }

        </div>
    );
};

export {PostRelated};