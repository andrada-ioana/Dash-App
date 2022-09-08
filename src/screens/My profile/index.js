import React from 'react';
import MyProfileComponent from '../../components/My profile';

const MyProfile = () => {
  const [value, onChangeText] = React.useState('');

  return <MyProfileComponent />;
};

export default MyProfile;
