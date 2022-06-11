<template>
    <div class="logo">
        <img src="@/assets/TechBoom.png" alt="logo" />
        <span class="title">Tech Boom</span>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.logo {
    width: 148.5px;
    background-color: #274FAE;
    height: 10%;
    border: none;
    line-height: 50px;
    margin: 0px;
    display: flex;
    align-items: center;
    padding-left: 1px;
    color: #fff;
    img {
        width: 70px;
        height: 70px;
        margin-right:0px;
    }
    span {
        font-weight: 700;
        line-height: 40px;
        font-size: 8px;
        font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
        vertical-align: middle;
    }
}
</style>