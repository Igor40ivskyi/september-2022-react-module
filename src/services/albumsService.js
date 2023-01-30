import {axiosService} from "./axiosService";
import {endpoints} from "../configs/urls";

const albumsService = {
    getAll:()=> axiosService.get(endpoints.albums),

};

export {albumsService};