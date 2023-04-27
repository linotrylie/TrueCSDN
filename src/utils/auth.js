import Cookies from 'js-cookie'

export function getToken(key='access_token') {
  return Cookies.get(key)
}
/*

* 设置Cookies

* */
export function setToken (key= 'access_token', value, expiresTime = 14400) {
  let expires = new Date(new Date() * 1 + expiresTime * 1000)
  return Cookies.set(key, value, { expires: expires })
}

export function removeToken(key='access_token') {
  return Cookies.remove(key)
}

export function setUser(user) {
  setToken('avatar',user.avatar);
  setToken('email',user.email);
  setToken('username',user.username);
  setToken('nickname',user.nickname);
  setToken('roleId',user.roleId);
  setToken('level',user.level);
  setToken('isVip',user.isVip);
  setToken('joinTime',user.joinTime);
  setToken('status',user.status);
  setToken('id',user.id);
  return true
}

export function delUser() {
  removeToken('avatar');
  removeToken('email');
  removeToken('username');
  removeToken('nickname');
  removeToken('roleId');
  removeToken('level');
  removeToken('isVip');
  removeToken('joinTime');
  removeToken('status');
  removeToken('id');
  return true
}

export function checkLogin()
{
  return getToken() === undefined;
}
