import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import styles from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const HelpComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <View style={styles.navBar}>
        <IconAntDesign name="close" size={24} color={'transparent'} />
        <Text style={styles.title}>Help</Text>
        <TouchableOpacity>
          <IconAntDesign name="close" size={24} color={'#666666'} />
        </TouchableOpacity>
      </View>

      <Text style={styles.subTitle}>PLEASE LET US HELP</Text>
      <View>
        <View>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.textStyle}>Ride won't start</Text>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.textStyle}>Issue with a previous ride</Text>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.textStyle}>Damaged bike</Text>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.textStyle}>Improper parking</Text>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.textStyle}>FAQs</Text>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default HelpComponent;
