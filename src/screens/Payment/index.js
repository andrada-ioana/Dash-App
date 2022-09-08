import React from 'react';
import PaymentComponent from '../../components/Payment';

const Payment = () => {
  const [value, onChangeText] = React.useState('');

  return <PaymentComponent />;
};

export default Payment;
