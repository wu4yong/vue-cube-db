<!-- 页面区域 -->
<template>
  <el-container>
    <el-main>
      <!-- 表单 -->
      <h1 class="h1">新建表</h1>
      <el-form :inline="true" class="el-form" ref="form" label-width="auto" size="mini">

        <!-- 集群名称 -->
        <el-form-item label="集群名称:">
          <el-input v-model.trim="tableInfo.clusterName" :value="tableInfo.clusterName" disabled></el-input>
        </el-form-item>
        <!-- 业务部门 -->
        <el-form-item label="业务部门:">
          <el-input v-model.trim="tableInfo.businessDepart" disabled></el-input>
        </el-form-item>
        <!-- 管理员 -->
        <el-form-item label="管理员:">
          <el-input v-model.trim="tableInfo.manager" disabled></el-input>
        </el-form-item>
        <!-- 样本数据 -->
        <el-form-item label="样本数据:">
          <el-input v-model.trim="tableInfo.sampleData" disabled></el-input>
        </el-form-item>

        <!-- 命名空间 -->
        <el-form-item label="命名空间:">
          <el-select v-model.trim="tableInfo.namespace" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="tableInfo.value">
            </el-option>
          </el-select>
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
        <el-form-item label="TTL时间(秒):">
          <el-input v-model.trim="tableInfo.saveTime"></el-input>
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
        <el-table :data="tableList">
          <el-table-column v-for="{ prop, label } in tableHeaderConfigs" :key="prop" :prop="prop" :label="label">
          </el-table-column>
        </el-table>
      </el-footer>

    </el-main>
  </el-container>

</template>

<!-- 组件区域 -->
<script>
// 从仓库中获取数据
import { mapState } from "vuex";

export default {
  name: "manager-add",
  mounted() {
    // 通过vuex发起ajax请求，将数据存储在store仓库中（此处暂时使用mock请求数据）
    this.$store.dispatch("getTableInfoList");
  },
  computed: {
    ...mapState({
      tableList: (state) => state.home.tableList,
    }),
  },
  data() {
    // 列表表头配置
    this.tableHeaderConfigs = [
      { prop: 'clusterName', label: '集群名称' },
      { prop: 'namespace', label: '命名空间' },
      { prop: 'tableName', label: '表名称' },
      { prop: 'columnFamilyName', label: '列族名称' },
      { prop: 'saveTime', label: 'TTL时间(秒)' },
      { prop: 'businessDepart', label: '业务部门' },
      { prop: 'manager', label: '管理员' },
      { prop: 'sampleData', label: '样本数据' },
      { prop: 'createDate', label: '创建日期' },
    ]
    return {
      options: [
        {
          value: "01",
          label: "default",
        },
        {
          value: "02",
          label: "user",
        },
        {
          value: "03",
          label: "company",
        }
      ],
      value: 'default',
      // 列表数据对象
      tableInfo: {
        "clusterName": "华为服务器01",
        "namespace": "default",
        "tableName": '',
        "columnFamilyName": '',
        "saveTime": '',
        "businessDepart": '研发部',
        "manager": 'admin',
        "sampleData": '暂无数据',
        "createDate": ''
      }
    };
  },
  methods: {
    createTableData() {
      console.log(JSON.stringify(this.tableInfo));
      alert(JSON.stringify(this.tableInfo))
    },
  },
};
</script>

<!-- 样式区域 -->
<style scoped>
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
  padding-top: 5px;
  border: 0.05em dashed rgb(136, 136, 160);
}
</style>
