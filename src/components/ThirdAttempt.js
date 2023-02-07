import {useReducer} from "react";

const ThirdAttempt = () => {


    const reducer = (state,action) => {

        console.log(state);
        switch (action.type) {
            case 'INC1':
                return {...state, counter1: state.counter1 + 1}
            case 'DEC1':
                return {...state, counter1: state.counter1 - 1};
            case 'INC2':
                return {...state, counter2: state.counter2 + 1}
            case 'DEC2':
                return {...state, counter2: state.counter2 - 1}
            case 'RESET':
                return {counter1:action.payload, counter2: action.payload}


            default:
                return {...state};
        }
    };


    const initValue = () => {
        return {counter1: 0, counter2: 0};
    };

    const [state,dispatch] = useReducer(reducer, null, initValue);

    return (
        <div>
            <div>COUNTER1 {state.counter1}</div>
            <button onClick={()=>dispatch({type: 'INC1'})}>INC</button>
            <button onClick={()=>dispatch({type: 'DEC1'})}>DEC</button>

            <div>COUNTER2 {state.counter2}</div>
            <button onClick={()=>dispatch({type: 'INC2'})}>INC</button>
            <button onClick={()=>dispatch({type: 'DEC2'})}>DEC</button>

            <hr/>
            <button onClick={()=>dispatch({type: 'RESET', payload: 99})}>RESET</button>



        </div>
    );
};

export {ThirdAttempt};