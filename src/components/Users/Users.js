import {User} from "../User/User";
import {useEffect, useState} from "react";

const Users = () => {
    const [users,setUsers] = useState();
    console.log(users);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => setUsers(value))
    },[]);

    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export {Users};