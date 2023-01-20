const User2 = ({user}) => {

    const {id, name, username, email} = user;


    return (
        <div>
            <div>id {id}</div>
            <div>name {name}</div>
            <div>username {username}</div>
            <div>email {email}</div>
            {/*<button onClick={()=>}>GET Details</button>*/}
        </div>
    );
};

export {User2};