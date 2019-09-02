
import publicFn from '@/public'

/**
 * 存放公共组件位置
 */


export default {
    install(Vue) {

        publicFn(Vue)
        //假的占位图地址  后面接上尺寸
        Vue.prototype.$imgUrl = 'http://placehold.it/1000x1000'
    },
}