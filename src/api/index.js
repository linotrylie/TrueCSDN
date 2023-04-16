import { get, post } from '@/utils/request.js'

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

