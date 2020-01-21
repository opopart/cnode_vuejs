import axios from 'axios'
import { Message, Loading} from 'element-ui'

const error = () => {
  Message({
    type: 'error',
    message: '错误,请重试',
    duration: 2 * 1000
  })
}

let loading;
const startLoading = () => {
  loading = Loading.service({
    lock: true,
    text: '加载中',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

const stopLoading = () => {
  loading.close();
}

const service = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000,
});

service.interceptors.request.use(
  config => {
    startLoading()
    return config
  },
  err => {
    stopLoading()
    error()
    Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    stopLoading()
    return response.data
  },
  err => {
    stopLoading()
    error()
    return Promise.reject(err)
  }
)

export default service



