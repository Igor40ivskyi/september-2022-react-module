import {useState} from "react";

const Count = () => {

    const [b, setB] = useState(0);


    console.log('Count');


    return (
        <div>
            <div>A : {b}</div>
            <button onClick={()=>setB(prevState => prevState+1)}>INC</button>
        </div>
    );
};

export {Count};