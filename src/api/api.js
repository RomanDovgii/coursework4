import axios from "axios";
import { ApiInfo } from "../utils/constants";

export const createApi = () => {
    const api = axios.create({
        baseURL: ApiInfo.BASE_URL,
        timeout: ApiInfo.TIMEOUT
    });

    const onSuccess = (response) => response;

    const onFail = (err) => {
        throw err;
    }

    api.interceptors.response.use(onSuccess, onFail);

    return api;
}