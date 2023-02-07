import css from './App.module.css'
import {useReducer, useRef} from "react";
import {Cats} from "./components/Cats";
import {Dogs} from "./components/Dogs";


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const [lastCat] = state.cats.slice(-1);
            const idCat = lastCat ? lastCat.idCat + 1 : 0;
            return {...state, cats: [...state.cats, {idCat, name: action.payload}]};
        case 'DELETE_CAT':
            const indexCat = state.cats.findIndex(cat => cat.idCat === action.payload);
            state.cats.splice(indexCat, 1);
            return {...state};
        case 'ADD_DOG':
            const [lastDog] = state.dogs.slice(-1);
            const idDog = lastDog ? lastDog.idDog + 1 : 0;
            return {...state,dogs:[...state.dogs,{idDog, name: action.payload}]}
        case 'DELETE_DOG':
            const indexDog = state.dogs.findIndex(dog => dog.idDog === action.payload);
            state.dogs.splice(indexDog, 1);
            return {...state};
    }

};


const App = () => {

    const catInput = useRef();
    const dogInput = useRef();

    const initValue = () => {
        return {cats:[], dogs: []}
    };


    const [state,dispatch] = useReducer(reducer, null, initValue);

    const createCat = () => {
        dispatch({type: 'ADD_CAT', payload: catInput.current.value})
        catInput.current.value = '';
    };

    const createDog = () => {
        dispatch({type: 'ADD_DOG', payload: dogInput.current.value});
        dogInput.current.value = '';
    };


    return (
        <div className={css.App}>
            <div>
                <input type="text" ref={catInput}/>
                <button onClick={()=> createCat()}>CREATE CAT</button>
                <hr/>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>
            <div>
                <input type="text" ref={dogInput}/>
                <button onClick={()=>createDog()}>CREATE DOG</button>
                <hr/>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export {App};