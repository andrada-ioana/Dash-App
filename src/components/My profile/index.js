import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Linking,
  Switch,
  Text,
  TouchableHighlightBase,
  TouchableHighlightComponent,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import styles from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {HOME_NAVIGATOR} from '../../constants/routeNames';
import {DrawerToggleButton} from '@react-navigation/drawer';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const MyProfileComponent = () => {
  const {navigate} = useNavigation();
  const [isEnabled, setIsEnabled] = React.useState(true);
  return (
    <Container>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/xIcon.png')}
            style={styles.iconImage1}
          />
        </TouchableOpacity>
        <Text style={styles.title}>My profile</Text>
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
      <View style={styles.subTitle}>
        <View style={{paddingBottom: 28}}>
          <TouchableOpacity style={styles.sectionDarkTitle}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/dog.png')}
                style={styles.iconImage3}
              />
              <Text style={styles.textStyle}>Marc Vana</Text>
            </View>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sectionLight}>
            <View>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.textStyle}>marc.vana@yahoo.com</Text>
            </View>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sectionDark}>
            <View>
              <Text style={styles.label}>Password</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>..........</Text>
            </View>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>

          <View style={styles.sectionLight}>
            <View>
              <Text style={styles.label}>Notifications</Text>
              <Text style={styles.textStyle}>Promos, discounts, news</Text>
            </View>
            <Switch
              value={isEnabled}
              onValueChange={value => setIsEnabled(value)}
              trackColor={{true: '#7e5abb'}}
            />
          </View>

          <TouchableOpacity style={styles.sectionDark}>
            <View>
              <Text style={styles.label}>Language</Text>
              <Text style={styles.textStyle}>English (United States)</Text>
            </View>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sectionLight}>
            <View>
              <Text style={styles.label}>Theme</Text>
              <Text style={styles.textStyle}>Light</Text>
            </View>
            <IconAntDesign name="right" size={24} color={'#666666'} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.actionRow}>
          <Octicons
            name="sign-out"
            size={24}
            color={'#666666'}
            style={{paddingRight: 10, color: '#7E5ABB'}}
          />
          <Text style={styles.linkBtn}>Sign out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionRow}>
          <EvilIcons
            name="trash"
            size={35}
            color={'#666666'}
            style={{marginRight: 3, color: '#7E5ABB', marginLeft: -7}}
          />
          <Text style={styles.linkBtn}>Delete account</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default MyProfileComponent;
