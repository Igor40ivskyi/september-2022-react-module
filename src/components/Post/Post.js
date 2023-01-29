import {Link, useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const navigate = useNavigate();
    const {id, userId, title} = post;

    return (
        <div>
            <div>id {id}</div>
            <div>userId {userId}</div>
            <div>title {title}</div>
            {/*<Link to={id.toString()} state={{...post}}>POST DETAILS</Link>*/}
            <button onClick={()=>navigate(id.toString(),{state:post})}>POST DETAILS</button>
        </div>
    );
};

export {Post};