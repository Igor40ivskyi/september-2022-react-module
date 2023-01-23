import {useState} from "react";

import {Posts} from "../../components";
import './User.css';


const User = ({user,setUserId}) => {

    const {id, name, username, email} = user;

    const [idd, setIdd] = useState(null);


    return (
        <div>
            <div className={'userFields'}>
                <div>id {id}</div>
                <div>name {name}</div>
                <div>username {username}</div>
                <div>email {email}</div>
            {!idd && <button onClick={() => setIdd(id)}>POSTS</button>}
            {idd && <button onClick={() => setIdd(null)}>HIDE</button>}
            </div>
            <Posts id={idd}/>
            <hr/>

        </div>
    );
};

export {User};