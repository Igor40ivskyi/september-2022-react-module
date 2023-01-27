import {Users, UsersForm} from "./components";
import {useEffect, useState} from "react";
import {commentsService, usersService} from "./services";
import {CommentsForm} from "./components/CommentsForm/CommentsForm";
import {Coments} from "./components/Coments/Coments";

const App = () => {


    // const [users, setUsers] = useState([]);
    //
    // useEffect(() => {
    //     usersService.getAll().then(({data}) => setUsers(data));
    //
    // },[]);


    const [comments,setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data));
    },[]);

    return (
        <div>
            {/*<UsersForm setUsers={setUsers}/>*/}
            {/*<hr/>*/}
            {/*<Users users={users}/>*/}

            <CommentsForm setComments={setComments}/>
            <hr/>
            <Coments comments={comments}/>
        </div>
    );
};

export {App};