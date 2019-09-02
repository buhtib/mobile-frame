let md5 = require('js-md5')
import axios from '@/api'

/**
 * 全局方法
 */
export default (Vue) => {
    /**
     * 将md5加密方法挂在window上
     * 
     * @param 
     * 
     * @example _md5("lijiacheng")
     * 
     * @return {string} 加密后的字符串
     */
    window._md5 = md5

    /**
     * 将axios api请求的方法挂在window上
     * 
     * @example  _axios.get(url, params) | _axios.post(url, params)
     */
    window._axios = axios


}