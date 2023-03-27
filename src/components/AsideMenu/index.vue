<!-- 页面区域 -->
<template>
  <!-- 左侧菜单区域 -->
  <el-aside width="200px">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-user"></i>用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1"><i class="el-icon-s-operation"></i>用户列表</el-menu-item>
            <el-menu-item index="1-2"><i class="el-icon-edit"></i>信息修改</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-data"></i>数据管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1"><i class="el-icon-setting"></i>表管理</el-menu-item>
            <el-menu-item index="1-2"><i class="el-icon-s-tools"></i>数据管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-monitor"></i>会员管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1"><i class="el-icon-user-solid"></i>会员人数</el-menu-item>
            <el-menu-item index="1-2"><i class="el-icon-goods"></i>收支明细</el-menu-item>
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
