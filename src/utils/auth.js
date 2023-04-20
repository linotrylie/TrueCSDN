import Cookies from 'js-cookie'

export function getToken(key='User-Token') {
  return Cookies.get(key)
}

export function setToken(key='User-Token',token) {
  return Cookies.set(key, token)
}

export function removeToken(key='User-Token') {
  return Cookies.remove(key)
}
