<!-- 页面区域 -->
<template>
  <!-- 左侧菜单区域 -->
  <el-aside width="200px">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">用户列表</el-menu-item>
            <el-menu-item index="1-2">信息修改</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>数据管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">表管理</el-menu-item>
            <el-menu-item index="1-2">数据管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </el-aside>
</template>

<!-- 组件区域 -->
<script>
export default {
  name: "AsideMenu",
};
</script>

<!-- 样式区域 -->
<style scoped></style>
