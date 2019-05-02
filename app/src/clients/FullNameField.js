import React from 'react';
import AvatarField from './AvatarField';
import pure from 'recompose/pure';

const FullNameField = ({ record = {}, size }) => (
  <div style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
    {/* <AvatarField record={record} size={size} /> */}
    &nbsp;{record.Client_Short_Name} {record.Client_Formal_Name}
  </div>
);

const PureFullNameField = pure(FullNameField);

PureFullNameField.defaultProps = {
  source: 'Client_Formal_Name',
  label: 'resources.clients.fields.name'
};

export default PureFullNameField;
