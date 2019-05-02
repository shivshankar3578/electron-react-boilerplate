import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';

import './App.css';

import authProvider from './authProvider';
import themeReducer from './themeReducer';
import { Layout } from './layout';
import customRoutes from './routes';
import englishMessages from './i18n/en';

import clients from './clients';

import dataProviderFactory from './dataProvider';

const i18nProvider = locale => {
  if (locale === 'hans') {
    return import('./i18n/hans').then(messages => messages.default);
  }

  // Always fallback on english
  return englishMessages;
};

class App extends Component {
  state = { dataProvider: null };

  async componentWillMount() {
    const dataProvider = await dataProviderFactory(
      process.env.REACT_APP_DATA_PROVIDER
    );

    this.setState({ dataProvider });
  }

  componentWillUnmount() {
    this.restoreFetch();
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return (
        <div className="loader-container">
          <div className="loader">Loading...</div>
        </div>
      );
    }

    return (
      <Admin
        title=""
        dataProvider={dataProvider}
        customReducers={{ theme: themeReducer }}
        customRoutes={customRoutes}
        authProvider={authProvider}
        // dashboard={Dashboard}
        loginPage={false}
        appLayout={Layout}
        locale="en"
        i18nProvider={i18nProvider}
      >
        <Resource name="clients" {...clients} />
      </Admin>
    );
  }
}

export default App;
