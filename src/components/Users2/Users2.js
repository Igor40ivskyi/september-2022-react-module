import {useEffect, useState} from "react";
import {User} from "../User/User";
import axios from "axios";
import {axiosService} from "../../services/axiosService";

const Users2 = () => {
    console.log('User2');
    let [users,setUsers] = useState([]);
    const [count, setCount] = useState(0);
    console.log(count);
    useEffect(() => {
        axiosService.get('/comments').then(value => value.data).then(value => setUsers([...value]));
    }, [count]);

    return (
        <div>
            <button onClick={()=>setCount(prevState=>prevState+1)} >INC</button>
            {users.map(value => <User key={value.id} user={value}/>)}

        </div>
    );
};

export {Users2};