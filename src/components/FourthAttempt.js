import {useReducer} from "react";

const FourthAttempt = () => {

    const reducer = (state,action) => {

        switch (action.type) {
            case 'INC1':
                return {...state, count1: state.count1 + 1}
            case 'DEC1':
                return {...state, count1: state.count1 - 1}
            case 'INC2':
                return {...state, count2: state.count2 + 1}
            case 'DEC2':
                return {...state, count2: state.count2 - 1}
            case 'RESET':
                return {count1:0, count2: 0}
            case 'SET100':
                return {count1:action.payload, count2: action.payload}
            default:
                return {...state};

        }
    };

    const initValue = () => {
        return {count1:0, count2: 0}
    };



    const [state, dispatch] = useReducer(reducer, null, initValue);

    return (
        <div>
            <div>COUNT1 : {state.count1}</div>
            <button onClick={()=>dispatch({type:'INC1'})}>INC</button>
            <button onClick={()=>dispatch({type: 'DEC1'})}>DEC</button>


            <div>COUNT2 : {state.count2}</div>
            <button onClick={()=>dispatch({type: 'INC2'})}>INC</button>
            <button onClick={()=>dispatch({type:'DEC2'})}>DEC</button>

            <hr/>

            <button onClick={()=>dispatch({type:'RESET'})}>RESET</button>

            <button onClick={()=>dispatch({type: 'SET100',payload:100})}>SET 100</button>

        </div>
    );
};

export {FourthAttempt};