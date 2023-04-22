import Cookies from 'js-cookie'

export function getToken(key='access_token') {
  return Cookies.get(key)
}

export function setToken(key='access_token',token) {
  return Cookies.set(key, token)
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
