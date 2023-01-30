import {axiosService} from "./axiosService";
import {endpoints} from "../configs/urls";

const postsService = {
    getAll:()=> axiosService.get(endpoints.posts),
    getById:(id)=>axiosService.get(`${endpoints.posts}/${id}`)
}

export {postsService};