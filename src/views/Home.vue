<template>
  <nav-swiper></nav-swiper>
  <div ref='target'>
    <NewGoodCourse v-if="targetIsVisible"></NewGoodCourse>
  </div>
</template>

<script setup>
import NavSwiper from '../components/home/NavSwiper.vue'
// 按需加载组件
import { useIntersectionObserver } from '@vueuse/core'
// 异步组件
import { defineAsyncComponent, ref } from 'vue'
const NewGoodCourse = defineAsyncComponent(() => import('../components/home/NewGoodCourse.vue'))

const target = ref(null)

const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    targetIsVisible.value = isIntersecting
  }
})
</script>

<style lang="less" scoped>
.home {
  width: 90%;
  margin: 25px auto 0;
}
</style>