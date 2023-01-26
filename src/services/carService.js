import {axiosService} from "./axiosService";
import {points} from "../configs";

const carService = {
    getAll: () => axiosService.get(points.cars),
    create: (newCar) => axiosService.post(points.cars, newCar),
    getById: (id) => axiosService.get(`${points.cars}/${id}`),
    updateById: (id, data) => axiosService.put(`${points.cars}/${id}`, data),
    deleteById: (id) => axiosService.delete(`${points.cars}/${id}`),
}

export {carService};