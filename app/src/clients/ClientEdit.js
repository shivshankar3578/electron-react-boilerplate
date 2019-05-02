import React from 'react';
import {
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EditButton,
  FormTab,
  LongTextInput,
  NullableBooleanInput,
  NumberField,
  ReferenceManyField,
  TabbedForm,
  TextField,
  TextInput
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

import FullNameField from './FullNameField';
import { styles } from './ClientCreate';

const ClientTitle = ({ record }) =>
  record ? <FullNameField record={record} size={32} /> : null;

const ClientEdit = ({ classes, ...props }) => (
  <Edit title={<ClientTitle />} {...props}>
    <TabbedForm>
      <FormTab label="resources.clients.tabs.identity">
        <TextInput
          source="Client_Short_Name"
          formClassName={classes.Client_Short_Name}
        />
        <TextInput
          source="Client_Formal_Name"
          formClassName={classes.Client_Formal_Name}
        />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default withStyles(styles)(ClientEdit);
