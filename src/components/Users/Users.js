import {User} from "../User/User";
import {useEffect, useState} from "react";
import {UserDetails} from "../UserDetails/UserDetails";


const Users = () => {

    const [users,setUsers] = useState([]);
    const [userDetails,setUserDetails] = useState(null);


    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => setUsers(value));

    }, []);


    return (
        <div>
            <h1>User Details</h1>
            {userDetails && <UserDetails user={userDetails}/>}
            <hr/>
            <h1>Users</h1>
            {users.map(value => <User key={value.id} user={value} setUserDetails={setUserDetails}/>)}

        </div>
    );
};

export {Users};