import base from './base'; // 导入接口域名列表
import instance from '@/utils/request.js'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const article = {
  // 新闻列表
  articleList (params) {
    return instance.post(`${base.t}/vod/list`,qs.stringify(params));
  },
  // 新闻详情,演示
  async articleDetail (params) {
    return instance.post(`${base.t}/vod`,qs.stringify(params));
  },
  tagList() {
    return instance.get(`${base.t}/tag/list`);
  },
  bannerList() {
    return instance.get(`${base.t}/banner/list`);
  },
  hotList(params) {
    return instance.get(`${base.t}/hot/list`,qs.stringify(params));
  },
}

export default article;
