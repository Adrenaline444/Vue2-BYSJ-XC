<template>
    <div class="public_loading">
        <div class="box">
            <van-loading color="#1989fa" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "public_loading"
    }
</script>

<style lang="scss" scoped>
.public_loading{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background: white;
    .box{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>
