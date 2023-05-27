import React, {Component} from 'react';
import {StyleSheet, View, Alert, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {
  ADD_CARD,
  END_RIDE,
  HOME_NAVIGATOR,
  MENU,
  PAYMENT,
  SAFETY_CENTER,
  SCAN_QR,
} from '../../constants/routeNames';
import HomeNavigator from '../../navigations/HomeNavigator';
import {useNavigation} from '@react-navigation/native';

class Camera extends Component {
  state = {
    barcodes: [],
  };

  barcodeRecognized = ({barcodes}) => this.setState({barcodes});

  renderBarcodes = () => (
    <View>{this.state.barcodes.map(this.renderBarcode)}</View>
  );

  renderBarcode = ({bounds, data}) => (
    <React.Fragment key={data + bounds.origin.x}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          position: 'absolute',
          borderColor: '#F00',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: 10,
          ...bounds.size,
          left: bounds.origin.x,
          top: bounds.origin.y,
        }}>
        <Text
          style={{
            color: '#F00',
            flex: 1,
            position: 'absolute',
            textAlign: 'center',
            backgroundColor: 'transparent',
          }}>
          {data}
        </Text>
      </View>
    </React.Fragment>
  );

  delay = ms => new Promise(res => setTimeout(res, ms));
  navigation = this.props;
  componentDidMount() {
    console.log('DAAAAAAAAAAAAA');
    //await this.delay(3000);
    this.navigation(END_RIDE);
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.scanner}
          onGoogleVisionBarcodesDetected={this.ba0codeRecognized}>
          {this.renderBarcodes()}
        </RNCamera>
        {/* <RNCamera
          style={{flex: 1, alignItems: 'center'}}
          ref={ref => {
            this.camera = ref;
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  // add the following
  scanner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default function (props) {
  const navigation = useNavigation();
  return <Camera {...props} navigation={navigation} />;
}
