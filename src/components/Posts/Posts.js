import {useEffect, useState} from "react";

import {postsService} from "../../services";
import {Post} from "../../components";

const Posts = ({id}) => {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        postsService.then(value => value.data).then(value => setPosts(value));
    },[]);

    return (
        <div>
            {posts.map((value, index) => <Post key={index} post={value} userID={id}/>)}
        </div>
    );
};

export {Posts};