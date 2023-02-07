const Cat = ({cat,dispatch}) => {
    const {idCat, name} = cat;
    return (
        <div>
            {idCat} - {name}
            <button style={{display:'block',marginBottom:20,marginTop:20}} onClick={()=>dispatch({type:'DELETE_CAT',payload:idCat})}>DELETE CAT</button>
            <hr/>

        </div>
    );
};

export {Cat};