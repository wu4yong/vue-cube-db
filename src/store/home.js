// 引入请求
import { reqTableInfoList } from "@/api";

// home模块的小仓库
const state = {
  // home仓库数据管理的数据
  tableList: [],
};

// mutations 修改state的唯一手段
const mutations = {
  // 数据管理数据
  TABLELIST(state, tableList) {
    // console.log("mutations 接收的参数:"+JSON.stringify(tableList));
    state.tableList = tableList;
  },
};

// actions 处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async getTableInfoList({ commit }) {
    // 通过API里面的接口函数调用,向服务器发送请求获取数据
    // console.log(reqTableInfoList());
    let result = await reqTableInfoList();
    if (result.code == 200) {
      // console.log("准备修改仓库数据");
      commit("TABLELIST", result.data);
    }
  },
};

// getters 理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};

// 对外暴露仓库数据
export default {
  state,
  mutations,
  actions,
  getters,
};
