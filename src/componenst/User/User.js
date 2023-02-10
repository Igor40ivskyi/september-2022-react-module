import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {

    const {id, name, username, email, phone} = user;

    const dispatch = useDispatch();

    return (
        <div style={{paddingLeft:40,margin:50,fontSize:20,fontFamily:"Arial",fontWeight:'bold'}}>
            <div style={{margin:10}}>id {id}</div>
            <div style={{margin:10}}>name {name}</div>
            <div style={{margin:10}}>username {username}</div>
            <div style={{margin:10}}>email {email}</div>
            <div style={{margin:10}}>phone {phone}</div>
            <button onClick={()=>dispatch(userActions.getById({id}))} style={{height:30,width:200,marginLeft:20}}>API select</button>
        </div>
    );
};

export {User};
