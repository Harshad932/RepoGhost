export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export const API_ENDPOINTS = {
  LOGIN_URL: `${API_BASE_URL}/oauth2/authorization/github`,
  GET_LOGIN_URL_META: `${API_BASE_URL}/api/auth/login-url`,
  ME: `${API_BASE_URL}/api/auth/me`,
  LOGOUT: `${API_BASE_URL}/api/auth/logout`,
};
