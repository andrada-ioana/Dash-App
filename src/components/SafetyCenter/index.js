import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Linking, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import styles from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Hyperlink from 'react-native-hyperlink';
import {HOME_NAVIGATOR} from '../../constants/routeNames';

const SafetyCenterComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/xIcon.png')}
            style={styles.iconImage1}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Safety Center</Text>
        <TouchableOpacity
          onPress={() => {
            navigate(HOME_NAVIGATOR);
          }}>
          <Image
            source={require('../../assets/images/xIcon.png')}
            style={styles.iconImage2}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.subTitle}>SAFETY IS A PRIORITY</Text>
      <View>
        <TouchableOpacity
          style={styles.sectionDark}
          onPress={() => Linking.openURL('https://ridedash.eu/')}>
          <Text style={styles.textStyle}>How to ride Dash’s bikes</Text>
          <IconAntDesign name="right" size={24} color={'#666666'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sectionLight}
          onPress={() => Linking.openURL('https://ridedash.eu/')}>
          <Text style={styles.textStyle}>Report an accident</Text>
          <IconAntDesign name="right" size={24} color={'#666666'} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default SafetyCenterComponent;
