import base from './base'; // 导入接口域名列表
import instance from '@/utils/request.js'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const auth = {
  // 获取验证码图片
  captchaImg () {
    return instance.get(`${base.t}/captcha-img`);
  },
  // 新闻详情,演示
  articleDetail (id, params) {
    return instance.get(`${base.t}/topic/${id}`, {
      params: params
    });
  },
  // post提交
  login (params) {
    return instance.post(`${base.t}/login`, qs.stringify(params));
  },

  logup(params){
    return instance.post(`${base.t}/logup`, qs.stringify(params));
  },

  logout(params) {
    return instance.post(`${base.t}/logout`, qs.stringify(params));
  }
  // 其他接口…………
}

export default auth;