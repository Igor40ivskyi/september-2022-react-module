import {useEffect, useState} from "react";
import {User} from "../User/User";
import axios from "axios";
import {axiosService} from "../../services/axiosService";
import {userService} from "../../services/userService";
import {User2} from "../User2/User2";

const Users2 = () => {

    const [users,setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const [userDetails,setUserDetails] = useState(null);


    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]));
    }, [count]);

    return (
        <div>
            {/*<button onClick={()=>setCount(prevState=>prevState+1)} >INC</button>*/}
            {users.map(value => <User key={value.id} user={value} setUserDetails={setUserDetails()}/>)}

        </div>
    );
};

export {Users2};