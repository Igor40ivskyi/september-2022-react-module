import {useEffect, useState} from "react";
import {commentsService} from "../../services/commentsService";
import {useNavigate, useParams} from "react-router-dom";

const Comments = () => {

    const [comments,setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data));
    },[]);

    const navigate = useNavigate();



    return (
        <div>
            {comments.map(value => {
                const {postId, id, name, email, body} = value;
                return(
                    <div key={id} style={{marginLeft:'20px',fontFamily:'fantasy',fontSize:20,marginBottom:15,maxWidth:700}}>
                        <div>POST ID {postId}</div>
                        <div>ID {id}</div>
                        <div>NAME {name}</div>
                        <div>EMAIL {email}</div>
                        <div>CONTENT {body}</div>
                        <button onClick={()=>navigate(id.toString())} style={{background:'black',color:'gold',fontSize:16,borderRadius:5}}>GET POST</button>
                    </div>
                )
            })}
        </div>
    );
};

export {Comments};