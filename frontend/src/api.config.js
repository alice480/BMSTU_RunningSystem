import axios from "axios";

export const instance = axios.create({
  // cookies will be attached to the request
  withCredentials: true,
  baseURL: "https://jsonplaceholder.typicode.com/",
});


// request interceptor
// add accessToken to request from localStorage
instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config
  }
)


// response interceptor
// in case of invalid access Token updates it
// and resends the request with the updated accessToken
instance.interceptors.response.use(
  // valid accessToken
  (config) => {
    return config;
  },
  // overdue accessToken
  async (error) => {
   // _isRetry to prevent looped request
   const originalRequest = {...error.config};
   originalRequest._isRetry = true; 
    if (
      // check that the error is due to an invalid accessToken
      error.response.status === 401 && 
      // check that the request is repeated
      error.config &&
      !error.config._isRetry
    ) {
      try {
        // token renewal request
        const resp = await instance.get("/api/refresh");
        // saving new accessToken to localStorage
        localStorage.setItem("token", resp.data.accessToken);
        // resending the request with the updated accessToken
        return instance.request(originalRequest);
      } catch (error) {
        console.log("AUTH ERROR");
      }
    }
    // if another error occurred
    throw error;
  }
);