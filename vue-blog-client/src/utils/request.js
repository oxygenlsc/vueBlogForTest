import axios from 'axios'
import ShowMessage from './showMessage'
import { cloneDeep, isEmpty } from 'lodash';
import * as pathToRegexp  from 'path-to-regexp';
import qs from 'qs';  

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};
axios.interceptors.response.use(function (resp) {
    if (resp.data.code !== 0) {
        ShowMessage({
            content: resp.data.msg,
            type: 'error'
        })
        return null
    }
    return resp.data.data
}, (error) => {
    if (error && error.response) {
        switch (error.response.status) {
            case 500:
                ShowMessage({
                    content: codeMessage[error.response.status],
                    type: 'error'
                })
                break;
            case 403:
                ShowMessage({
                    content: codeMessage[error.response.status],
                    type: 'error'
                })
                break;
            case 404:
                ShowMessage({
                    content: codeMessage[error.response.status],
                    type: 'error'
                })
                break;
            default:
                ShowMessage({
                    content: '发生未知错误！！！',
                    type: 'error'
                })
        }
    } else if (JSON.stringify(error).indexOf('timeout') !== -1) {
        ShowMessage({
            content: '连接超时,请刷新试试',
            type: 'error'
        })
    }
})
export default function request(options) {
    let { data, url, method = 'get' } = options
    const cloneData = cloneDeep(data)  
    try {
      let domain = ''
      const urlMatch = url.match(/[a-zA-z]+:\/\/[^/]*/)
      if (urlMatch) {
        [domain] = urlMatch
        url = url.slice(domain.length)
      }
  
      const match = pathToRegexp.parse(url)
      url = pathToRegexp.compile(url)(data)
  
      for (const item of match) {
        if (item instanceof Object && item.name in cloneData) {
          delete cloneData[item.name]
        }
      }
      url = domain + url
    } catch (e) {
        ShowMessage({
            content: e.message,
            type: 'error'
        })
    }
  
    options.url =
      method.toLocaleLowerCase() === 'get'
        ? `${url}${isEmpty(cloneData) ? '' : '?'}${qs.stringify(cloneData)}`
        : url
  
    return axios(options)
      .then((response) => {
        return Promise.resolve({
          ...response
        })
      })
      .catch((error) => {
        ShowMessage({
            content: '服务异常',
            type: 'error'
        })
        const { response } = error
        let msg
        let statusCode
  
        if (response && response instanceof Object) {
          const { data, statusText } = response
          statusCode = response.status
          msg = data.message || statusText
        } else {
          statusCode = 600
          msg = error.message || 'Network Error'
        }
  
        /* eslint-disable */
        return Promise.reject({
          success: false,
          statusCode,
          message: msg,
        })
      })
  }
// export default ins