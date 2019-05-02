import englishMessages from 'ra-language-english';

export default {
  ...englishMessages,
  pos: {
    search: 'Search',
    configuration: 'Configuration',
    language: 'Language',
    theme: {
      name: 'Theme',
      light: 'Light',
      dark: 'Dark'
    },
    dashboard: {},
    menu: {
      administration: 'Administration'
    }
  },
  resources: {
    clients: {
      name: 'Manage Clients',
      fields: {
        name: 'Name'
      },
      tabs: {
        address: 'Address'
      },
      page: {
        delete: 'Delete Customer'
      }
    }
  }
};
