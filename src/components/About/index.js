import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Linking, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import styles from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {HOME_NAVIGATOR} from '../../constants/routeNames';

const AboutComponent = () => {
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
        <Text style={styles.title}>About</Text>
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

      <View>
        <View>
          <TouchableOpacity
            style={styles.sectionDark}
            onPress={() => Linking.openURL('https://ridedash.eu/')}>
            <View style={styles.icon}>
              <IconFeather name="star" size={18} style={{marginRight: 10}} />
              <Text style={styles.textStyle}>Rate the app</Text>
            </View>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectionLight}
            onPress={() => Linking.openURL('https://ridedash.eu/')}>
            <View style={styles.icon}>
              <IconAntDesign name="like2" size={18} style={{marginRight: 10}} />
              <Text style={styles.textStyle}>Like us on Facebook</Text>
            </View>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectionDark}
            onPress={() => Linking.openURL('https://ridedash.eu/')}>
            <View style={styles.icon}>
              <IconAntDesign
                name="hearto"
                size={18}
                style={{marginRight: 10}}
              />
              <Text style={styles.textStyle}>Careers at Dash</Text>
            </View>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectionLight}
            onPress={() => Linking.openURL('https://ridedash.eu/')}>
            <View style={styles.icon}>
              {/**
              <Image
                source={require('../../assets/images/legal-icon.svg')}
                style={styles.iconImage}
              />**/}
              <IconFontAwesome
                name="institution"
                size={18}
                style={{marginRight: 10}}
              />
              <Text style={styles.textStyle}>Legal</Text>
            </View>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default AboutComponent;
