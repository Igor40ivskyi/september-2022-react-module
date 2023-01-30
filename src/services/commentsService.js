import {axiosService} from "./axiosService";
import {endpoints} from "../configs/urls";

const commentsService = {
    getAll:()=> axiosService.get(endpoints.comments),

};

export {commentsService};