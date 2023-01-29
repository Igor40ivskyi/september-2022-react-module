import {PostDetails, Posts} from "../../components";
import {useLocation, useParams} from "react-router-dom";

const PostsDetailsPage = () => {

    const {postId} = useParams();
    const {state} = useLocation();


    return (
        <div>
            <PostDetails postId={postId} state={state}/>

        </div>
    );
};

export {PostsDetailsPage};