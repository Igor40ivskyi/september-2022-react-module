const User = ({user,setUserDetails}) => {

    const {id, name} = user;

    return (
        <div>
            <div>id {id}</div>
            <div>name {name}</div>
            <button onClick={()=>setUserDetails(user)}>GET DETAILS</button>
        </div>
    );
};

export {User};