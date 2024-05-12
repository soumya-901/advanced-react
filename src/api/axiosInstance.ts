import axios, { AxiosError } from 'axios';


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL, // Replace with your axiosInstance base URL
});


// Optional interceptors for centralized request/response handling:
axiosInstance.interceptors.request.use(
    (config) => {
        // const globalAbortController = new AbortController();
        // globalAbortController.abort();
        // console.log("config",config)
        // console.log("global abort controller ",globalAbortController)
        // if(config.signal){
        //     console.log("inside config.signal condition ",config.signal)
        // }
        // // Add logic for request interceptors, e.g., adding authentication headers
        // config.signal = globalAbortController.signal;
        // console.log("config - after ",config)
        return config;
    },
    (error: AxiosError) => { // Type any for flexibility in error handling
        // Handle request errors globally
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        // Handle successful responses globally, e.g., data transformation
        return response;
    },
    (error: AxiosError) => { // Type any for flexibility in error handling
        // Handle response errors globally
        return Promise.reject(error);
    }
);

export default axiosInstance;
