import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import styles from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const SafetyCenterComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <View style={styles.navBar}>
        <IconAntDesign name="close" size={24} color={'transparent'} />
        <Text style={styles.title}>Safety Center</Text>
        <TouchableOpacity>
          <IconAntDesign name="close" size={24} color={'#666666'} />
        </TouchableOpacity>
      </View>

      <Text style={styles.subTitle}>SAFETY IS A PRIORITY</Text>
      <View>
        <View>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.textStyle}>How to ride Dash’s bikes</Text>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.textStyle}>Report an accident</Text>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default SafetyCenterComponent;
