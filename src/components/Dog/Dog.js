const Dog = ({dog,dispatch}) => {
    const {idDog,name} = dog
    console.log(name);
    console.log(idDog);
    return (
        <div>
            {idDog}) {name}
            <button onClick={()=>dispatch({type:'DELETE_DOG',payload:idDog})}>DELETE</button>
        </div>
    );
};

export {Dog};