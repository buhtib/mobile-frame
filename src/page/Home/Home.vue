<!-- 首页-->
<template>
    <div class="home">
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <div class="text">哈哈</div>
    </div>
</template>

<script>

export default {
    name: "Home",
    created() {
        _axios.get('movieOnInfoList?token=')
        .then(() => {
            this.$toast('请求成功');
        })
    }
};
</script>

<style lang="less" scoped>
.home {
    .text {
        width: 370px;
        height: 200px;
        background-color: red;
    }
    
}
</style>