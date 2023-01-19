const User = ({value}) => {
    const {id, name, username, email} = value;
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