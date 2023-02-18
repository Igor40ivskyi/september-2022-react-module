import {apiService} from "./apiService";
import {points} from "../configs";

const postsService = {
    getAll: () => apiService.get(points.posts),
    getById: (id) => apiService.get(`${points.posts}/${id}`),
};

export {postsService};