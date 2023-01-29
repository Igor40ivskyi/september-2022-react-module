import {axiosService} from "./axiosService";
import {points} from "../configs";

const postsService = {
    getAll:()=> axiosService.get(points.posts),

}

export {postsService};