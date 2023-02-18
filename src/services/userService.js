import {apiService} from "./apiService";
import {points} from "../configs/urls";

const userService = {
    getAll: () => apiService.get(points.users),
    getById: (id) => apiService.get(`${points.users}/${id}`),
};

export {userService};
