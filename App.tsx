import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const App = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  if (device == null) {
    return <Text>Loading...</Text>;
  }
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default App;
