//先引入mockjs模块
import Mock from "mockjs";

//[JSON数据格式根本没有对外暴露，但是可以引入]原因:webpack默认对外暴露的：图片、JSON数据格式
//把JSON数据格式引入进来
import tableInfo from "./tableInfo.json";

//mock数据:第一个参数请求地址   第二个参数：请求数据
Mock.mock("/mock/tableInfo", { code: 200, data: tableInfo }); //模拟首页大的轮播图的数据
