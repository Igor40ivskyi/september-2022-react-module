import {ClassComponent} from "./components/ClassComponent";
import {useEffect, useState} from "react";
import {FunctionComponent} from "./components/FunctionComponent";

const App = () => {

    const [flag, setFlag] = useState(true);

    return (
        <div>
            {/*{flag && <ClassComponent name={'Vasya'}/>}'*/}
            { flag && <FunctionComponent name={'Vasya'}/>}
            <button onClick={() => setFlag(prev => !prev)}>Unmount</button>
        </div>
    );
};

export {App};