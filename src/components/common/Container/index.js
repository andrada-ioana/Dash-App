import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';

const Container = ({children}) => {
  return (
    <ScrollView styles={{flexDirection: 'column', height: '100%'}}>
      <View style={styles.wrapper}>{children}</View>
    </ScrollView>
  );
};

export default Container;
