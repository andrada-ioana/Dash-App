import React from 'react';
import ReferralComponent from '../../components/Referral';

const Referral = () => {
  const [value, onChangeText] = React.useState('');

  return <ReferralComponent />;
};

export default Referral;
