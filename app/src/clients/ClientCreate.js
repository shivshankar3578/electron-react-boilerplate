import React from 'react';
import {
  Create,
  DateInput,
  FormTab,
  LongTextInput,
  TabbedForm,
  TextInput
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

export const styles = {
  Client_Short_Name: { display: 'inline-block' },
  Client_Formal_Name: { display: 'inline-block', marginLeft: 32 },
  email: { width: 544 },
  address: { maxWidth: 544 },
  zipcode: { display: 'inline-block' },
  city: { display: 'inline-block', marginLeft: 32 },
  comment: {
    maxWidth: '20em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
};

const ClientCreate = ({ classes, ...props }) => (
  <Create {...props}>
    <TabbedForm>
      <FormTab label="resources.clients.tabs.identity">
        <TextInput
          autoFocus
          source="Client_Short_Name"
          formClassName={classes.Client_Short_Name}
        />
        <TextInput
          source="Client_Formal_Name"
          formClassName={classes.Client_Formal_Name}
        />
      </FormTab>
    </TabbedForm>
  </Create>
);

export default withStyles(styles)(ClientCreate);
