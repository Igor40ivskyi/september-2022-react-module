import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {
    const {id, name, username} = user;

    const dispatch = useDispatch();
    return (
        <div>
            <div>id {id}</div>
            <div>name {name}</div>
            <div>username {username}</div>
            <button onClick={()=>dispatch(userActions.saveSelectedUser(user))}>select user</button>
            <button onClick={()=>dispatch(userActions.getById({id}))}>API select user</button>
        </div>
    );
};

export {User};