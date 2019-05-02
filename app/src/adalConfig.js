import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
import { returnStatement } from '@babel/types';

export const adalConfig = {
  clientId: 'f43f57dc-6cf8-46d3-97d0-61f8417acfb9',
  endpoints: {
    api:
      'https://login.microsoftonline.com/cea3cn.onmicrosoft.com/v2.0/.well-known/openid-configuration'
  },
  cacheLocation: 'sessionStorage',
  postLogoutRedirectUri: window.location.origin,
  redirectUri: 'http://localhost:3000'
};

export const authContext = new AuthenticationContext(adalConfig);
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(
  authContext,
  adalConfig.endpoints.api
);
