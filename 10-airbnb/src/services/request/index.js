import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class Request {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout,
        })

        this.instance.interceptors.response.use((res) => {
            return res.data;
        }, (err) => {
            return Promise.reject(err);
        })
    }

    request(config) {
        return this.instance.request(config);
    }

    get(config) {
        return this.request({
            ...config,
            method: 'GET',
        })
    }

    post(config) {
        return this.request({
            ...config,
            method: 'POST',
        })
    }

    delete(config) {
        return this.request({
            ...config,
            method: 'DELETE',
        })
    }

    put(config) {
        return this.request({
            ...config,
            method: 'PUT',
        })
    }

    patch(config) {
        return this.request({
            ...config,
            method: 'PATCH',
        })
    }
}

export default new Request(BASE_URL, TIMEOUT);