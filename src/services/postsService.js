import {axiosService} from "./axiosService";

const postsService = axiosService.get('/posts');

export {postsService};