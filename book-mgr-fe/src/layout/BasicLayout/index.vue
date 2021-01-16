<template>
  <div class="basic-layout">
    <div class="app-header">
      <div class="left">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2505602724,1211018748&fm=26&gp=0.jpg" alt="">
        <div class="title"><strong>图书管理系统</strong></div>
      </div>
      <div class="right">
        <div class="hello-msg">你好，xx</div>
        <div class="logout">退出</div>
      </div>
    </div>
    <div class="app-header-placeholder"></div>
    <div class="app-content">
      <div class="left">
        <app-Nav />
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
  @import './index.scss';

</style>
