import {axiosService} from "./axiosService";
import {points} from "../configs";

const albumsService = {
    getAll:()=> axiosService.get(points.albums),
}

export {albumsService};