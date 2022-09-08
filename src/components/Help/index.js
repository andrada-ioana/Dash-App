import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Linking, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import styles from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {HOME_NAVIGATOR} from '../../constants/routeNames';

const HelpComponent = () => {
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
        <Text style={styles.title}>Help</Text>
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

      <Text style={styles.subTitle}>PLEASE LET US HELP</Text>
      <View>
        <View>
          <TouchableOpacity
            style={styles.sectionDark}
            onPress={() => Linking.openURL('https://ridedash.eu/')}>
            <Text style={styles.textStyle}>Ride won't start</Text>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectionLight}
            onPress={() => Linking.openURL('https://ridedash.eu/')}>
            <Text style={styles.textStyle}>Issue with a previous ride</Text>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectionDark}
            onPress={() => Linking.openURL('https://ridedash.eu/')}>
            <Text style={styles.textStyle}>Damaged bike</Text>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectionLight}
            onPress={() => Linking.openURL('https://ridedash.eu/')}>
            <Text style={styles.textStyle}>Improper parking</Text>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectionDark}
            onPress={() => Linking.openURL('https://ridedash.eu/')}>
            <Text style={styles.textStyle}>FAQs</Text>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default HelpComponent;
