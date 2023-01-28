import {Link} from "react-router-dom";

const Post = ({post}) => {

    const {id, userId, title} = post;

    return (
        <div>
            <div>id {id}</div>
            <div>userId {userId}</div>
            <div>title {title}</div>
            <Link to={id.toString()}>POST DETAILS</Link>
        </div>
    );
};

export {Post};