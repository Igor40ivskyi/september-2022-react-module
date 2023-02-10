import {axiosService} from "./axiosService";
import {points} from "../configs";

const usersService = {
    getAll: () => axiosService.get(points.users),
    getById: (id) => axiosService.get(`${points.users}/${id}`)
};

export {usersService};