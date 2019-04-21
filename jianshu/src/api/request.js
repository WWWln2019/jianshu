import axios from "axios"
import {message} from "antd"

axios.defaults.withCredentials = true
axios.defaults.timeout = 10000
message.config({
    top: 56,
    duration: 5,
    maxCount: 1
})
//request拦截器
axios.interceptors.request.use(
    config => {
        return config;
    }
)

//response
axios.interceptors.response.use(
    response => {
        const res = response.data
        if (response.status === 200 && res.status !== 1) {
            if (response.request.responseURL.indexOf("userInfo") > -1) {
                return res
            }
            message.error(res.message)
        }
        return res
    },
    error => {
        const {status, data} = error.response
        if (error === undefined || error.code === "ECONNABORTED") {
            message.warning("服务请求超时")
            return Promise.reject(error)
        }
        if (data.indexOf("ECONNREFUSED")>-1) {
            message.warning("连接被服务器拒绝")
            return Promise.reject(error)
        }
        if (status === 401) {
            message.error(data.message)
        } else {
            message.error(error.message)
        }

        return Promise.reject(error)
    }
)

/*const request = async (_options) => {
    const method = _options.method || "GET"
    const options = merge({..._options}, {method})
    console.log("options:",options)
    return axios(options)
}

const get = (url, params, _options={}) => {
    return request({..._options, params, url})
}

const post = (url, data, _options = {method: "POST"}) => {
    console.log(url, data, _options)
    return request({..._options, data, url})
}*/

const request = (url, data, method = "GET") => {
    if (method.toUpperCase() === "GET") {
        const params = []
        Object.keys(data).forEach((key) => {
            params.push(`${key}=${data[key]}`)
        })
        url = params.length > 0 ? `?${params.join("&")}` : url
    }
    return axios({url, data, method})
}

export default request
