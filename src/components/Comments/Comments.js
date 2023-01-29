import {useEffect, useState} from "react";
import {commentsService} from "../../services/commentsService";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const [comments,setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data));
    },[]);


    return (
        <div>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export {Comments};