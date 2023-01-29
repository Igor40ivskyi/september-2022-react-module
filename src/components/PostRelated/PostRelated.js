import {useParams} from "react-router-dom";

const PostRelated = () => {

    const params = useParams();
    const {postId} = params
    console.log(postId);
    return (
        <div>
            PostRelated
        </div>
    );
};

export {PostRelated};