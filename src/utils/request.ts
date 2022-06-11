import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'

// create an axios instance
const service = axios.create({
  baseURL: "/api", // url = base url + request url
  timeout: 5000, // request timeout
  withCredentials: true,
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return response;
    } else {
      Promise.reject();
    }
  },
  error => {
    console.log(error);
    return Promise.reject();
  }
);

export default service;