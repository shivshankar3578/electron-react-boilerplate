import { fetchUtils, Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(
  'http://localhost:1337/api',
  httpClient
);
export default (type, resource, params) =>
  new Promise(resolve =>
    setTimeout(() => resolve(dataProvider(type, resource, params)), 500)
  );
