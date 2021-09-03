<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">Chicken Music</h1>
  </div>
</template>

<script>
export default {
  name: 'm-header',
};
</script>

<style lang="scss" scoped>
  .header{
    height:44px;
    text-align: center;
    color:$color-theme;
    font-size: 0;
    // @mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。
    // @include 指令可以将混入（mixin）引入到文档中。
    .icon{
      display: inline-block;
      @include bg-image('logo');
      background-size:30px 32px;
      width: 30px;
      height: 32px;
      margin-right: 9px;
      margin-top: 6px;
      vertical-align: top;
      }
    .text{
      display: inline-block;
      line-height:44px;
      font-size: $font-size-large;
      vertical-align: top;
    }

  }
</style>