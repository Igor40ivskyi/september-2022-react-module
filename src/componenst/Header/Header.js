import {useSelector} from "react-redux";

const Header = () => {
    const {selectedUser} = useSelector(state => state.users);
    return (
        <div style={{minHeight:50,textAlign:'center',paddingTop:20,fontSize:25}}>
            {selectedUser && selectedUser.name}
        </div>
    );
};

export {Header};