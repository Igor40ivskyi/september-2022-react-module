import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    },[]);

    const {users,loading} = useSelector(state => state.users);

    return (
        <div>
            {loading && <h1>LOADING...</h1>}
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};