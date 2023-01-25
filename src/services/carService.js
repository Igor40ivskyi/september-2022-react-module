import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (newCar) => axiosService.post(urls.cars, newCar),
    update: (id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    delete: (id) => axiosService.delete(`${urls.cars}/${id}`),
};

export {carService};