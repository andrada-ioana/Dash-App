import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import styles from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const AboutComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <View style={styles.navBar}>
        <IconAntDesign name="close" size={24} color={'transparent'} />
        <Text style={styles.title}>About</Text>
        <TouchableOpacity>
          <IconAntDesign name="close" size={24} color={'#666666'} />
        </TouchableOpacity>
      </View>

      <View>
        <View>
          <TouchableOpacity style={styles.section}>
            <View style={styles.icon}>
              <IconFeather name="star" size={18} style={{marginRight: 10}} />
              <Text style={styles.textStyle}>Rate the app</Text>
            </View>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <View style={styles.icon}>
              <IconAntDesign name="like2" size={18} style={{marginRight: 10}} />
              <Text style={styles.textStyle}>Like us on Facebook</Text>
            </View>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
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
          <TouchableOpacity style={styles.section}>
            <View style={styles.icon}>
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
