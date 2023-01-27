import {axiosService} from "./axiosService";
import {points} from "../configs";

const commentsService = {
    getAll: () => axiosService.get(points.comments),
    create: (newPost) => axiosService.post(points.comments, newPost),
}

export {commentsService};