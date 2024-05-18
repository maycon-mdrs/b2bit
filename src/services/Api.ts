import axios from 'axios';
import { deleteUserLocalStorage } from '@/context/AuthProvider/util';
import { message } from 'antd';

export const Api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Accept': 'application/json;version=v1_web',
        'Content-Type': 'application/json',
    },
});

/**
 * Initializes the Axios instance with a custom response interceptor.
 * @param {Function} onUnauthorized - Callback function to be called when a 401 response is received.
 */
export const initializeAxios = (onUnauthorized: { (): void; (): void; }) => {
    const currentUrl = window.location.pathname;
    Api.interceptors.response.use(
        response => response,
        error => {
            if (error.response && error.response.status === 401) {
                if (currentUrl !== '/login') {
                    onUnauthorized(); // Calls the callback function to redirect
                    deleteUserLocalStorage();
                    message.error("Session expired! Login again.");
                }
            }
            console.log(error);
        }
    );
};
