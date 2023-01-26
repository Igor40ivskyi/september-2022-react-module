import {axiosService} from "./axiosService";
import {points} from "../configs";

const usersService = {
    getAll: () => axiosService.get(points.users),
    create: (newUser) => axiosService.post(points.users, newUser),
};

export {usersService};