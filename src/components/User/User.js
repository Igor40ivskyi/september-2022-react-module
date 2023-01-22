const User = ({user,setUserId}) => {

    const {id, name, username, email} = user;

    return (
        <div>
            <div>id {id}</div>
            <div>name {name}</div>
            <div>username {username}</div>
            <div>email {email}</div>

            <br/>

            <button onClick={()=>setUserId(id)}>USER`S POSTS</button>

            <br/>
            <br/>
            <hr/>

        </div>
    );
};

export {User};