import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../../components";
import {UserFullData} from "../UserFullData/UserFullData";

const Users = () => {

    const [users,setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value));
    },);

    return (
        <div>
            <h1>USERS LIST</h1>
            {users.map((value, index) => <User key={index} user={value} setUserDetails={setUserDetails}/>)}

            <h1>USER DETAILS</h1>
            {userDetails && <UserFullData user={userDetails}/>}

            <hr/>
        </div>
    );
};

export {Users};