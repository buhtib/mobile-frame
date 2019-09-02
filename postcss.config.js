module.exports = {
    plugins: {
        autoprefixer: {},
        // 之所以设为37 .5， 是为了引用像vant第三方UI框架， 因为第三方框架没有兼容rem，
        //  用的是px单位， 将rootValue的值设置为设计图宽度（ 这里为750px） 75 的一半， 
        //  即可以1: 1 还原vant的组件， 否则会样式会有变化， 例如按钮会变小。
        // !!   既然设置成了37 .5 那么我们必须在写样式时， 也将值改为设计图的一半   !!
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*'],
            // 该项仅在使用 Circle 组件时需要
            // 原因参见 https://github.com/youzan/vant/issues/1948
            selectorBlackList: ['van-circle__layer']
        }
    }
}