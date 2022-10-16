import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HOME_NAVIGATOR} from '../../constants/routeNames';

const HistoryUserComponent = () => {
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
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#7E5ABB',
              width: 10,
              height: 10,
              marginLeft: -0.7,
              borderRadius: 100,
            }}
          />
          <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16}}>
            2022 June
          </Text>
        </View>
        <View
          style={{
            borderLeftWidth: 2,
            borderLeftColor: '#DBDBDB',
            marginLeft: 3,
            paddingTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 23,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#E4E4E4',
                borderRadius: 100,
                padding: 8,
              }}>
              <MaterialCommunityIcons
                name="bicycle-electric"
                size={25}
                color={'#7E5ABB'}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16}}>Electric XX-21</Text>
              <Text style={{fontSize: 11}}>23 June, 19:06</Text>
            </View>
          </View>

          <Text style={{fontSize: 14, fontWeight: 'bold'}}>RON 9.60</Text>
        </View>

        <View
          style={{
            borderLeftWidth: 2,
            borderLeftColor: '#DBDBDB',
            marginLeft: 3,
            paddingTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 42,
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 23,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#E4E4E4',
                borderRadius: 100,
                padding: 8,
              }}>
              <MaterialCommunityIcons
                name="bicycle-electric"
                size={25}
                color={'#7E5ABB'}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16}}>Electric XS-19</Text>
              <Text style={{fontSize: 11}}>23 June, 10:20</Text>
            </View>
          </View>

          <Text style={{fontSize: 14, fontWeight: 'bold'}}>RON 15.20</Text>
        </View>
      </View>

      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#7E5ABB',
              width: 10,
              height: 10,
              marginLeft: -0.7,
              borderRadius: 100,
            }}
          />
          <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16}}>
            2022 May
          </Text>
        </View>
        <View
          style={{
            borderLeftWidth: 2,
            borderLeftColor: '#DBDBDB',
            marginLeft: 3,
            paddingTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 23,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#E4E4E4',
                borderRadius: 100,
                padding: 8,
              }}>
              <MaterialCommunityIcons
                name="bicycle-electric"
                size={25}
                color={'#7E5ABB'}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16}}>Electric XZ-14</Text>
              <Text style={{fontSize: 11}}>23 May, 19:06</Text>
            </View>
          </View>

          <Text style={{fontSize: 14, fontWeight: 'bold'}}>RON 13.70</Text>
        </View>

        <View
          style={{
            borderLeftWidth: 2,
            borderLeftColor: '#DBDBDB',
            marginLeft: 3,
            paddingTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 23,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#E4E4E4',
                borderRadius: 100,
                padding: 8,
              }}>
              <MaterialCommunityIcons
                name="bicycle"
                size={25}
                color={'#7E5ABB'}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16}}>Lite LY-84</Text>
              <Text style={{fontSize: 11}}>23 May, 11:50</Text>
            </View>
          </View>

          <Text style={{fontSize: 14, fontWeight: 'bold'}}>RON 10.13</Text>
        </View>

        <View
          style={{
            borderLeftWidth: 2,
            borderLeftColor: '#DBDBDB',
            marginLeft: 3,
            paddingTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 23,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#E4E4E4',
                borderRadius: 100,
                padding: 8,
              }}>
              <MaterialCommunityIcons
                name="bicycle-electric"
                size={25}
                color={'#7E5ABB'}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16}}>Electric XX-28</Text>
              <Text style={{fontSize: 11}}>23 May, 15:19</Text>
            </View>
          </View>

          <Text style={{fontSize: 14, fontWeight: 'bold'}}>RON 21.40</Text>
        </View>
      </View>
    </Container>
  );
};

export default HistoryUserComponent;
