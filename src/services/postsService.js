import {axiosService} from "./axiosService";
import {points} from "../configs";

const postsService = {
    getAll:()=> axiosService.get(points.posts),
    getById: (id) => axiosService.get(`${points.posts}/${id}`),

}

export {postsService};