import {axiosService} from "./axiosService";
import {points} from "../configs";

const todosService = {
    getAll:()=> axiosService.get(points.todos),
}

export {todosService};