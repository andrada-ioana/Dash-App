import React, {useEffect, useState} from 'react';
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

const Camera = () => {
  // const barcodes = [];

  // barcodeRecognized = ({barcodes}) => this.setState({barcodes});

  // renderBarcodes = () => (
  //   <View>{this.state.barcodes.map(this.renderBarcode)}</View>
  // );

  // renderBarcode = ({bounds, data}) => (
  //   <React.Fragment key={data + bounds.origin.x}>
  //     <View
  //       style={{
  //         borderWidth: 2,
  //         borderRadius: 10,
  //         position: 'absolute',
  //         borderColor: '#F00',
  //         justifyContent: 'center',
  //         backgroundColor: 'rgba(255, 255, 255, 0.9)',
  //         padding: 10,
  //         ...bounds.size,
  //         left: bounds.origin.x,
  //         top: bounds.origin.y,
  //       }}>
  //       <Text
  //         style={{
  //           color: '#F00',
  //           flex: 1,
  //           position: 'absolute',
  //           textAlign: 'center',
  //           backgroundColor: 'transparent',
  //         }}>
  //         {data}
  //       </Text>
  //     </View>
  //   </React.Fragment>
  // );

  const [everytime, updateEverytime] = useState({});

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const {navigate} = useNavigation();

  useEffect(() => {
    setTimeout(() => navigate(END_RIDE), 5000);
  });

  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'black'}}>
      {/* <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
        onGoogleVisionBarcodesDetected={this.ba0codeRecognized}>
        {this.renderBarcodes()}
      </RNCamera> */}
      <RNCamera
        style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}
        ref={ref => {
          this.camera = ref;
        }}
      />
    </View>
  );
};

export default Camera;
