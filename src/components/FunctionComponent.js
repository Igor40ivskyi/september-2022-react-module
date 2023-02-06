import {useEffect, useState} from "react";

const FunctionComponent = (props) => {

    console.log('constructor');

    const [state,setState] = useState({a: 0, b: 25});

    useEffect(() => {
        console.log('useEffect');
        return () => {
            console.log('componentWillUnmount');
        };
    }, []);

    useEffect(() => {
        console.log('componentDidUpdate');
    },[state]);

    const inc = () => {
        setState(prev=>({a:prev.a+1,b:prev.b-1}))
    };
    return (
        <div>
            {console.log('render')}
            <div>
                <div>A : {state.a}</div>
                <div>B : {state.b}</div>
                <div>Name : {props.name}</div>
                <button onClick={()=>inc()}>INC</button>
            </div>
        </div>
    );
};

export {FunctionComponent};