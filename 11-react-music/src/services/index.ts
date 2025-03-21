import { base_url, timeout } from './config'
import BaseRequest from './request'

export const Request = new BaseRequest({
  // 传递特定拦截器
  baseURL: base_url,
  timeout: timeout,

  // 因为原本传递的类型中没有interceptors这个属性, 我们就要针对于原本类型进行拓展
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    },
    requestFailureFn: (err) => {
      return err
    },
    responseSuccessFn: (res) => {
      return res
    },
    responseFailureFn: (err) => {
      return err
    }
  }
})

export default Request
