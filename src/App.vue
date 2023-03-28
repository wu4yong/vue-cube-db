<template>
  <div id="app">
    <el-container class="container" direction="vertical">
      <!-- 头部导航区域 -->
      <Nav-Bar></Nav-Bar>
      <!-- 主体区域 左侧菜单+右边内容 -->
      <Container-Main></Container-Main>
    </el-container>
  </div>
</template>

<script>

// 引入组件
import ContainerMain from "@/pages/ContainerMain";

export default {
  name: "App",
  components: { ContainerMain },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b4278;
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
