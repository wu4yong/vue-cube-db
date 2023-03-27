<template>
  <div id="app">
    <!-- 头部导航区域 -->
    <Nav-Bar></Nav-Bar>
    <!-- 主体区域 左侧菜单+右边内容 -->
    <Container-Main></Container-Main>

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
  margin-top: 0%;
  padding-top: 0%;
}
</style>
