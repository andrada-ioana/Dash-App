import React from 'react';
import AboutComponent from '../../components/About';

const About = () => {
  const [value, onChangeText] = React.useState('');

  return <AboutComponent />;
};

export default About;
