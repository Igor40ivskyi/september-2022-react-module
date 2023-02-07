import {Cats} from "./components/Cats/Cats";
import {Dogs} from "./components/Dogs/Dogs";

import css from './App.module.css';
import {useRef} from "react";

const App = () => {

    const catInp = useRef();
    const dogInp = useRef();

    const createCat = () => {

    };

    const clreateDog = () => {

    };

    return (
        <div className={css.App}>
            <div>
                <input type="text" ref={catInp}/>
                <button onClick={()=>createCat}>CREATE CAT</button>
                <Cats/>
            </div>
            <div>
                <input type="text" ref={dogInp}/>
                <button onClick={clreateDog}>CREATE DOG</button>
                <Dogs/>
            </div>
        </div>
    );
};

export {App};