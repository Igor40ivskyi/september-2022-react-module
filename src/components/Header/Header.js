import {useSelector} from "react-redux";
import {userSlice} from "../../redux";

const Header = () => {
    const {selectedUser,loading} = useSelector(state => state.users);

    return (
        <div>
            {loading && <h1>LOADING ...</h1>}
            {selectedUser && selectedUser.name}
        </div>
    );
};

export {Header};