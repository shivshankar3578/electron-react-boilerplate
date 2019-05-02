import React from 'react';
import {
  BooleanField,
  Datagrid,
  DateField,
  DateInput,
  EditButton,
  Filter,
  List,
  NullableBooleanInput,
  NumberField,
  TextField,
  Responsive,
  SearchInput
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

import CustomerLinkField from './CustomerLinkField';
import ColoredNumberField from './ColoredNumberField';
import MobileGrid from './MobileGrid';

const ClientFilter = props => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    <DateInput source="created_" />
  </Filter>
);

const styles = {
  nb_commands: { color: 'purple' }
};

const ClientList = ({ classes, ...props }) => (
  <List
    {...props}
    filters={<ClientFilter />}
    sort={{ field: 'Client_Formal_Name', order: 'DESC' }}
    perPage={25}
  >
    <Responsive
      xsmall={<MobileGrid />}
      medium={
        <Datagrid>
          <CustomerLinkField />
          {/* <NumberField
                        source="nb_commands"
                        label="resources.clients.fields.commands"
                        className={classes.nb_commands}
                    /> */}

          <DateField source="CreateDate" showTime />
          <TextField source="CreatedBy" label="CreatedBy" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);

export default withStyles(styles)(ClientList);
