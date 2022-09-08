import React from 'react';
import HistoryUserComponent from '../../components/History user';

const HistoryUser = () => {
  const [value, onChangeText] = React.useState('');

  return <HistoryUserComponent />;
};

export default HistoryUser;
