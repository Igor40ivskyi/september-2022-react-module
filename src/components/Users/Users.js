import {User} from "../User/User";
import {useEffect, useState} from "react";


const Users = () => {

    const [users,setUsers] = useState([]);
    const [user,setUser] = useState(null);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => setUsers(value));

    }, []);

    useEffect(() => {
        user && fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`).then(value => value()).then(value => setUsers(value));
    },[user]);
    return (
        <div>
            <h1>User Details</h1>
            {user &&  <User user={user} /> }
            <hr/>
            <h1>Users</h1>
            {users.map(value => <User key={value.id} user={value} setUser={setUser}/>)}
        </div>
    );
};

export {Users};