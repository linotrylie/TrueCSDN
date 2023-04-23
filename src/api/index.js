import { get, post } from '@/utils/request.js'
import auth from '@/api/auth.js'
import base from '@/api/base.js'
import article from '@/api/article.js'
export function Post(url,data) {
  return post({url:url,data:data}).then(res => {
    if (res.code === 200) {
      return res;
    }
    return res
  }).catch(err => {
    return err;
  });
}
export default {
  auth,
  base,
  article
}

