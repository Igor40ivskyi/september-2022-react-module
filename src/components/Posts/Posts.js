import {useEffect, useState} from "react";
import {postsService} from "../../services";
import {Post} from "../Post/Post";

const Posts = () => {

    const [posts,setPosts] = useState();


    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data));
    },[]);


    return (
        <div>
            {posts&& posts.map(value=> <Post key={value.id} post={value}/>)}
        </div>
    );
};

export {Posts};