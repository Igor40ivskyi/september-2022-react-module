const Dog = ({dog,dispatch}) => {
    const {idDog, name} = dog;
    return (

        <div>
            {idDog} - {name}
            <button style={{display:'block',marginTop:20,marginBottom:20}} onClick={()=>dispatch({type:'DELETE_DOG',payload:idDog})}>DELETE DOG</button>
        </div>
    );
};

export {Dog};