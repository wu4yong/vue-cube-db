<!-- 页面区域 -->
<template>
  <el-container>
    <el-main>
      <!-- 表单 -->
      <h1 class="h1">新建表</h1>
      <el-form :inline="true" class="el-form" ref="form" label-width="80px" size="mini">
        <!-- 集群名称 -->
        <el-form-item label="集群名称:">
          <el-input v-model.trim="tableInfo.clusterName"></el-input>
        </el-form-item>
        <!-- 命名空间 -->
        <el-form-item label="命名空间:">
          <el-input v-model.trim="tableInfo.namespace"></el-input>
        </el-form-item>
        <!-- 表名称 -->
        <el-form-item label="表名称:">
          <el-input v-model.trim="tableInfo.tableName"></el-input>
        </el-form-item>
        <!-- 列族名称 -->
        <el-form-item label="列族名称:">
          <el-input v-model.trim="tableInfo.columnFamilyName"></el-input>
        </el-form-item>
        <!-- TTL(保存时间:秒) -->
        <el-form-item label="TTL(保存时间:秒):">
          <el-input v-model.trim="tableInfo.saveTime"></el-input>
        </el-form-item>
        <!-- 业务部门 -->
        <el-form-item label="业务部门:">
          <el-input v-model.trim="tableInfo.businessDepart"></el-input>
        </el-form-item>
        <!-- 管理员 -->
        <el-form-item label="管理员:">
          <el-input v-model.trim="tableInfo.manager"></el-input>
        </el-form-item>
        <!-- 样本数据 -->
        <el-form-item label="样本数据:">
          <el-input v-model.trim="tableInfo.sampleData"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="createTableData">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>

      <!-- 华丽的分割线 -->
      <el-divider></el-divider>

      <!-- 表格区域 -->
      <el-footer>
        <el-table>
          <el-table-column prop="clusterName" label="集群名称"> </el-table-column>
          <el-table-column prop="namespace" label="命名空间"> </el-table-column>
          <el-table-column prop="tableName" label="表名称"> </el-table-column>
          <el-table-column prop="columnFamilyName" label="列族名称"> </el-table-column>
          <el-table-column prop="saveTime" label="TTL(保存时间:秒):"> </el-table-column>
          <el-table-column prop="businessDepart" label="业务部门"> </el-table-column>
          <el-table-column prop="manager" label="管理员"> </el-table-column>
          <el-table-column prop="sampleData" label="样本数据"> </el-table-column>
          <el-table-column prop="createDate" label="创建日期"> </el-table-column>

        </el-table>
      </el-footer>

    </el-main>
  </el-container>
</template>

<!-- 组件区域 -->
<script>
export default {
  name: 'App', data() {
    return {
      // 表单数据
      tableInfo: {
        clusterName: '',
        namespace: '',
        tableName: '',
        columnFamilyName: '',
        saveTime: '',
        businessDepart: '',
        manager: '',
        sampleData: '',
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  methods: {
    createTableData() {
      console.log(JSON.stringify(this.tableInfo));
    }
  }

};
</script>

<!-- 样式区域 -->
<style  scoped>
.h1 {
  text-align: center;
}
/* .div {
  border: 1px solid rgb(136, 136, 160);
  margin-left: 200px;
  margin-top: 20px;
  float: absolute;
  position: right;
  text-align: center;
  width: 800px;
  height: 100%;
} */
.el-form {
  /* margin-top: 10px; */
  padding-top: 5px;
  border: 0.5px solid rgb(136, 136, 160);
}
</style>