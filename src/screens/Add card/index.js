import React from 'react';
import AddCardComponent from '../../components/Add card';

const AddCard = () => {
  const [value, onChangeText] = React.useState('');

  return <AddCardComponent />;
};

export default AddCard;
