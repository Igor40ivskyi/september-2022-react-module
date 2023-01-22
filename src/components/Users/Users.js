import {useEffect, useState} from "react";

import {User,Posts} from "../../components";
import {usersService} from "../../services";

const Users = () => {

    const [users,setUsers] = useState([]);
    const [userID,setUserId] = useState(0);

    useEffect(() => {
        usersService.then(value => value.data).then(value => setUsers(value));
    },[]);

    return (

        <div>
            {users.map((value, index) => <User key={index} user={value} setUserId={setUserId}/>)}
            <Posts id={userID}/>
        </div>

    );
};

export {Users};