import {apiService} from "./apiService";
import {urls} from "../configs";

const accessTokeKey = 'access';
const refreshTokenKey = 'refresh';

const authService = {
    login: async function (cred) {
        const response = await apiService.post(urls.auth.login, cred);

        if (response.status === 200) {
            this.setTokens(response.data);
        }
        return response;
    },
    refresh: async function (refresh){
        const response = await apiService.post(urls.auth.refresh, {refresh});
        if (response.status === 200) {
            this.setTokens(response.data);
        }

        return response;
    },
    me: () => apiService.get(urls.auth.me),

    setTokens: ({access,refresh}) => {
        localStorage.setItem(accessTokeKey, access);
        localStorage.setItem(refreshTokenKey, refresh);
    },

    getAccessToken: () => localStorage.getItem(accessTokeKey),

    getRefreshToken: () => localStorage.getItem(refreshTokenKey),

    deleteTokens: () => {
        localStorage.removeItem(accessTokeKey);
        localStorage.removeItem(refreshTokenKey);
    },

    isAuthenticated: () => !!localStorage.getItem(accessTokeKey),



};

export {authService};