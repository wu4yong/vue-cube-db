<!-- 页面区域 -->
<template>
  <el-container class="container">
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
<style scoped>
.el-table {
  width: 100%;
}

.el-table__header-wrapper table,
.el-table__body-wrapper table {
  width: 100% !important;
}
.el-table__body,
.el-table__footer,
.el-table__header {
  table-layout: auto;
}
</style>
