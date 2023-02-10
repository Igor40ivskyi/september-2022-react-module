import {useDispatch} from "react-redux";

import {postActions} from "../../redux/slices/postsSlice";

const Post = ({post}) => {

    const {userId, id, title, body} = post;

    const dispatch = useDispatch();

    return (
        <div style={{margin:40}}>

            <div style={{margin:10,fontSize:20,fontWeight:'normal',color:'darkblue'}}>userId {userId}</div>
            <div style={{margin:10,fontSize:20,fontWeight:'normal',color:'darkblue'}}>id {id}</div>
            <div style={{margin:10,fontSize:20,fontWeight:'normal',color:'darkblue'}}>title {title}</div>
            <div style={{margin:10,fontSize:20,fontWeight:'normal',color:'darkblue'}}>body {body}</div>

            <button onClick={()=>dispatch(postActions.getById({id}))} style={{height:30,width:200,marginLeft:20,fontWeight:'bolder'}}>API select</button>

        </div>
    );
};

export {Post};