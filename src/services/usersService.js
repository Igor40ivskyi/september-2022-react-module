import {axiosService} from "./axiosService";

const usersService = axiosService.get('/users');

export {usersService};