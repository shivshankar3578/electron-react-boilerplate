import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'react-admin';
import { authContext } from './adalConfig';

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    // never called because login form is skipped
    // const { username } = params;
    // localStorage.setItem('username', username);
    // accept all username/password combinations
    return Promise.resolve({ redirectTo: '/' });
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token');
    authContext.acquireTokenRedirect(authContext.config.endpoints.api);
    return Promise.resolve();
  }
  if (type === AUTH_ERROR) {
    return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    // Set auth. info for first time Visitor
    let token = localStorage.getItem('token');
    if (!token) {
      token = authContext.getCachedToken(authContext.config.clientId);
      localStorage.setItem('token', token);
      let user = authContext.getCachedUser();
      localStorage.setItem('username', user.profile.name);
    }
    return Promise.resolve();
  }
  return Promise.reject('Unkown method');
};
