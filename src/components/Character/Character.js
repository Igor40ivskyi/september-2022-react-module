const Character = ({character}) => {
    let {name, status, species, image} = character;
    return (
        <div>
            <div>name {name}</div>
            <div>status {status}</div>
            <div>species {species}</div>
            <div><img src={image} alt={name}/></div>
        </div>
    );
};

export {Character};