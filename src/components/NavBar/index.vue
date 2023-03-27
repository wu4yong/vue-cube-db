<!-- 页面区域 -->
<template>
  <el-header>
    <span class="span">
      <font size="3">欢迎 小花 登录系统</font>
      <el-button class="button" size="mini" type="primary">登录</el-button>
      <el-button class="button" size="mini" type="success">注册</el-button>
    </span>
  </el-header>
</template>

<!-- 组件区域 -->
<script>
export default {
  name: "NavBar",
};
</script>

<!-- 样式区域 -->
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 40px;
}

.span {
  margin-top: 12px;
  float: right;
  color: rgb(25, 8, 182);
}
.button {
  margin-top: 6px;
  float: right;
}
</style>
