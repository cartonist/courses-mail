<template>
  <div class="footer-container">
    <div class="inline-container">
      <div class="logo">
        <img src="https://xuexiluxian.cn/resources/images/logo02.png" alt="">
      </div>
      <div class="copy-right">
        <ul class="copy-top">
          <li><a href="#">关于我们</a></li>
          <li>|</li>
          <li><a href="#">联系我们</a></li>
          <li>|</li>
          <li><a href="#">意见反馈</a></li>
          <li>|</li>
        </ul>
        <div class="copy-buttom">
          <div style="text-align: center;margin-top: 5px">Copyright © 2018~2038 小鹿线 www.xuexiluxian.cn 24小时服务热线：010-86483040</div>
        </div>
      </div>
      <div class="wx">
        <img src="https://oss.xuexiluxian.cn/xiaoluxian-vcr/775debc713214fdbab4ee6a2f51851da.jpg" alt="">
        <p>官网微信</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.footer-container {
  background-color: #3483ff;
}
.inline-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 150px;
  margin: 25px auto 0;
  .logo {
    width: 100px;
    height: 50px;
    img {
      width: 100%;
    }
  }
  .copy-right {
    .copy-top {
      display: flex;
      justify-content: center;
      li {
        margin: 0 5px;
        list-style: none;
        color: #fff;
        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
    .copy-buttom {
      color: #fff;
      font-size: 12px;
      margin: 5px 0 0;
    }
  }
  .wx {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
    p {
      color: #fff;
      font-size: 14px;
      padding: 5px 0;
    }
  }
}
</style>