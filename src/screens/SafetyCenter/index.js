import React from 'react';
import SafetyCenterComponent from '../../components/SafetyCenter';

const SafetyCenter = () => {
  const [value, onChangeText] = React.useState('');

  return <SafetyCenterComponent />;
};

export default SafetyCenter;
