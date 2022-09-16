import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    if (!config) {
      config = {};
    }
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `KakaoAK c5b65eb42d62119a052daaa1389c3483`;
    return Promise.resolve(config);
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axios;
