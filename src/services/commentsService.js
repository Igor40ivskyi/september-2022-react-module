import {axiosService} from "./axiosService";
import {points} from "../configs";

const commentsService = {
    getAll:()=> axiosService.get(points.comments),
}

export {commentsService};