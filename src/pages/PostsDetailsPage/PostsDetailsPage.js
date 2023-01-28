import {PostDetails, Posts} from "../../components";
import {useParams} from "react-router-dom";

const PostsDetailsPage = () => {

    const {postId} = useParams();

    return (
        <div>
            <PostDetails postId={postId}/>

        </div>
    );
};

export {PostsDetailsPage};