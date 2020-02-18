import Cookies from 'js-cookie'

const VUE_APP_EXPIRED_TIME = process.env.VUE_APP_EXPIRED_TIME || null;

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  try {
    const expired = parseInt(VUE_APP_EXPIRED_TIME);
    const inExpiredMinutes = new Date(new Date().getTime() + expired * 60 * 1000);
    return Cookies.set(TokenKey, token, { expires: inExpiredMinutes })
  } catch {
    return Cookies.set(TokenKey, token)
  }
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
