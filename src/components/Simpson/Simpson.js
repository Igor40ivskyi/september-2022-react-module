const Simpson = ({simpson}) => {
    let {name, surname, image} = simpson;
    return (
        <div>
            <div>name {name}</div>
            <div>surname {surname}</div>
            <div><img src={image} alt={name}/></div>
        </div>
    );
};

export {Simpson};