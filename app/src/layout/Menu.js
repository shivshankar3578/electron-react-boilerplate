import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelIcon from '@material-ui/icons/Label';
import { withRouter } from 'react-router-dom';
import {
  translate,
  DashboardMenuItem,
  MenuItemLink,
  Responsive
} from 'react-admin';

import clients from '../clients';
import SubMenu from './SubMenu';

class Menu extends Component {
  state = {
    menuCatalog: false,
    menuSales: false,
    menuclients: false
  };

  static propTypes = {
    onMenuClick: PropTypes.func,
    logout: PropTypes.object
  };

  handleToggle = menu => {
    this.setState(state => ({ [menu]: !state[menu] }));
  };

  render() {
    const { onMenuClick, open, logout, translate } = this.props;
    return (
      <div>
        {' '}
        <DashboardMenuItem onClick={onMenuClick} />
        <SubMenu
          handleToggle={() => this.handleToggle('menuCustomer')}
          isOpen={this.state.menuCustomer}
          sidebarIsOpen={open}
          name="pos.menu.administration"
          icon={<clients.icon />}
        >
          <MenuItemLink
            to={`/clients`}
            primaryText={translate(`resources.clients.name`, {
              smart_count: 2
            })}
            leftIcon={<clients.icon />}
            onClick={onMenuClick}
          />
        </SubMenu>
        <Responsive
          small={logout}
          medium={null} // Pass null to render nothing on larger devices
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  open: state.admin.ui.sidebarOpen,
  theme: state.theme,
  locale: state.i18n.locale
});

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    {}
  ),
  translate
);

export default enhance(Menu);
