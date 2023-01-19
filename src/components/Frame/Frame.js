const Frame = ({frame}) => {

    let {name, status, species, gender, image} = frame;

    return (
        <div>
            <div>name {name}</div>
            <div>status {status}</div>
            <div>species {species}</div>
            <div>gender {gender}</div>
            <div><img src={image} alt={name}/></div>
        </div>
    );
};

export {Frame};