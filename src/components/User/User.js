const User = ({user,setUserDetails}) => {

    const {id, name, username, email} = user;

    return (
        <div>
            <div>id {id}</div>
            <div>name {name}</div>
            <div>username {username}</div>
            <div>email {email}</div>

        </div>
    );
};

export {User};