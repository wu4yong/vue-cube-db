<!-- 页面区域 -->
<template>
  <el-container>
    <!-- 左侧菜单 -->
    <Aside-Menu></Aside-Menu>
    <Form-Table></Form-Table>
  </el-container>

</template>

<!-- 组件区域 -->
<script>

import FormTable from "@/pages/FormTable";

export default {
  name: "ContainerMain",
  components: { FormTable },


};
</script>

<!-- 样式区域 -->
<style scoped>
</style>


