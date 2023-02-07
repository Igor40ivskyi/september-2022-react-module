import {Cat} from "./Cat";

const Cats = ({cats,dispatch}) => {
    console.log();
    return (
        <div>
            {cats.map(cat => <Cat key={cat.idCat} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export {Cats};