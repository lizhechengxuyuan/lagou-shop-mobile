import axios from 'axios'

// 配置基地址
const request = axios.create({
    baseURL: 'https://shop.fed.lagou.com/api'
})

export default request