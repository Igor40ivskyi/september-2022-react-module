import {useEffect, useState} from "react";
import {todosService} from "../../services/todosService";

const Todos = () => {

    const [todos,setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data));
    });

    return (
        <div>
            {todos.map(value => {
                const {id,userId,title,completed} = value;
                return(
                    <div key={id} style={{marginLeft:'20px',fontFamily:'fantasy',fontSize:20,marginBottom:15}}>
                        <div>ID {id}</div>
                        <div>USER ID {userId}</div>
                        <div>TITLE {title}</div>
                        <div>COMPLETED {`${completed}`}</div>
                    </div>
                )
            })}
        </div>
    );
};

export {Todos};