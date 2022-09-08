import React from 'react';
import PromotionsComponent from '../../components/Promotions';

const Promotions = () => {
  const [value, onChangeText] = React.useState('');

  return <PromotionsComponent />;
};

export default Promotions;
