import {axiosService} from "./axiosService";
import {endpoints} from "../configs/urls";

const todosService = {
    getAll:()=> axiosService.get(endpoints.todos),

};

export {todosService};