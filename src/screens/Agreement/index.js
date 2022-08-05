import React from 'react';
import AgreementComponent from '../../components/Agreement';

const Agreement = () => {
  const [value, onChangeText] = React.useState('');

  return <AgreementComponent />;
};

export default Agreement;
