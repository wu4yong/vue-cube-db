<!-- 页面区域 -->
<template>
  <el-container>
    <!-- 左侧菜单 -->
    <Aside-Menu></Aside-Menu>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
  </el-container>
</template>

<!-- 组件区域 -->
<script>
export default {
  name: "ContainerMain",
  components: {},
};
</script>

<!-- 样式区域 -->
<style scoped></style>
