import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {

    const {id, name, username, email, phone} = user;

    const dispatch = useDispatch();

    return (
        <div>
            <div>id {id}</div>
            <div>name {name}</div>
            <div>username {username}</div>
            <div>email {email}</div>
            <div>phone {phone}</div>
            <button onClick={()=>dispatch(userActions.getById({id}))}>APIselect</button>
        </div>
    );
};

export {User};
