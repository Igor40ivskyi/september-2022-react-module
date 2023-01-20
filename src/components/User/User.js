

const User = ({user,setUser}) => {

    const {id, name} = user;
    setUser(user)
    return (
        <div>
            <div>id {id}</div>
            <div>name {name}</div>
        </div>
    );
};

export {User};