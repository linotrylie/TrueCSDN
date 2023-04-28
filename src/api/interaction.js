import base from './base'; // 导入接口域名列表
import instance from '@/utils/request.js'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

 const interaction = {
  submitComment(params) {
    return instance.post(`${base.t}/post/comment`,qs.stringify(params));
  },

  getCommentList(params) {
    return instance.post(`${base.t}/comment/list`,qs.stringify(params));
  },
   delComment(params) {
     return instance.post(`${base.t}/comment/del`,qs.stringify(params));
   },
   postInteraction(params) {
     return instance.post(`${base.t}/vod/interaction`,qs.stringify(params));
   },
   postFollow(params) {
     return instance.post(`${base.t}/follow`,qs.stringify(params));
   }
}
export default interaction
