const Cat = ({cat,dispatch}) => {
    const {id,name} = cat
    console.log(name);
    return (
        <div>
            {id}) {name}
            <button onClick={()=>dispatch({type:'DELETE_CAT',payload:id})}>DELETE</button>
        </div>
    );
};

export {Cat};