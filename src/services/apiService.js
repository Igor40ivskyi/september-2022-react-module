import axios from "axios";

import {baseURL} from "../configs";
import {authService} from "./authService";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
    if (authService.isAuthenticated()) {
        const accessToken = authService.getAccessToken();

        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

let isRefreshing = false;

apiService.interceptors.response.use((config) => {
        return config
    },
    async (error) => {
        const refreshToken = authService.getRefreshToken();

        if (error.response?.status === 401 && refreshToken && !isRefreshing) {
            isRefreshing = true;
        try {
            await authService.refresh(refreshToken);
        }catch (e) {
            authService.deleteTokens();
            history.replace('/login?expSession=true');
        }
        isRefreshing = false;

        return apiService(error.config);
        }
        return Promise.reject(error);
    }

);



export {
    apiService,
    history
};