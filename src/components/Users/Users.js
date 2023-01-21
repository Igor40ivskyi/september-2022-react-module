import {useEffect, useState} from "react";

import {User} from "../index";
import {userService} from "../../services";
import {UserFullData} from "../../components";

const Users = () => {

    const [users,setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userService.getAll('/users').then(value => value.data).then(value => setUsers([...value]));
    },[]);

    return (
        <div>
            <h1>USERS</h1>
            {users.map((value,index) => <User key={index} user={value} setUserDetails={setUserDetails}/>)}

            <hr/>

            <h1>USER DETAILS</h1>
            {userDetails && <UserFullData user={userDetails}/>}

            <hr/>
        </div>
    );
};

export {Users};