import {useEffect, useState} from "react";
import {usersService} from "../../services";
import axios from "axios";
import {User} from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data));

    },[]);


    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export {Users};