import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import styles from './styles';
import {HOME_NAVIGATOR, REGISTER} from '../../constants/routeNames';

const HistoryComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/xIcon.png')}
            style={styles.iconImage2}
          />
        </TouchableOpacity>
        <Text style={styles.title}>History</Text>
        <TouchableOpacity
          onPress={() => {
            navigate(HOME_NAVIGATOR);
          }}>
          <Image
            source={require('../../assets/images/xIcon.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={require('../../assets/images/history.png')}
        style={styles.logoImage}
      />
      <TouchableOpacity>
        <Text style={styles.linkBtn}>Get a ride.</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default HistoryComponent;
