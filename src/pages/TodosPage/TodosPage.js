import {Todos} from "../../components/Todos/Todos";

const TodosPage = () => {


    return (
        <div>
            <h1 style={{width: '100%', fontSize: 35, fontWeight: 600,textAlign:"center",marginTop:'20px'}}>Todos page</h1>
            <br/>
            <Todos/>
        </div>
    );
};

export {TodosPage};