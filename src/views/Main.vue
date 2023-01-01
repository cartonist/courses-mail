<template>
  <Header></Header>
  <div class="main">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script setup>
import Header from '../components/common/Header.vue'
import Footer from '../components/common/Footer.vue'
</script>

<style lang="less" scoped>
.main {
  width: 90%;
  margin: 25px auto 0;
}
</style>