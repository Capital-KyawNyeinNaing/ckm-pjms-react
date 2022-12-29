import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

export const setAuth = ({ auth_data }) => {
  const copherAccessToken = CryptoJS.AES.encrypt(JSON.stringify(auth_data), 'auth_data');
  const rememberMe = getRememberMe();
  Cookies.set('auth_data', copherAccessToken.toString(), { expires: rememberMe ? 30 : 1 });
};

export const getAuth = () => {
  const sessi = Cookies.get('auth_data');
  if (!sessi) return false;
  const bytes = CryptoJS.AES.decrypt(sessi, 'auth_data');
  try {
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (err) {
    console.log('error', err);
  }
};

export const setRememberMe = (data) => {
  localStorage.setItem('remember_me', JSON.stringify(data));
};

export const getRememberMe = () => {
  return JSON.parse(localStorage.getItem('remember_me'));
};

export const logout = () => {
  setRememberMe(false);
  Cookies.remove('user_info');
  Cookies.remove('auth_data');
  Cookies.remove('refresh');
  localStorage.removeItem('auth_data');
  localStorage.removeItem('refresh');
  localStorage.removeItem('user_info');
  window.location.reload();
};
