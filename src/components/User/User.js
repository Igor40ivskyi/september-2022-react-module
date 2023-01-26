import './User.css';

const User = ({user}) => {

    const {id,name,username,email} = user;

    return (
        <div>
            <div className={'userCard'}>
                <div>id {id}</div>
                <div>name {name}</div>
                <div>username {username}</div>
                <div>email {email}</div>
            </div>
        </div>
    );
};

export {User};