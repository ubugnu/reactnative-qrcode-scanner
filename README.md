# React Native QR-code Scanner

- Initialize a react native app based on a typescript template:
  `npx react-native init App --template react-native-template-typescript`
- Move the app files to the current directory:
  `mv App/{*,.*} . && rm -r App`
- Install `https://github.com/mrousavy/react-native-vision-camera`, follow steps [here](https://github.com/mrousavy/react-native-vision-camera)
  `yarn add react-native-vision-camera`
- Add to `android/app/src/main/AndroidManifest.xml` the following:
  `xml <uses-permission android:name="android.permission.CAMERA" /> `
- Install `react-native-reanimated`:
  `yarn add react-native-reanimated`
- Add to `babel.config.js` the following:
  `js module.exports = { presets: [ //... ], plugins: [ //... 'react-native-reanimated/plugin', ], }; `
- Fix a bug in react-native-reanimated build by adding to `vim android/app/build.gradle` the following:
  `gradle android { // ... packagingOptions { pickFirst '**/armeabi-v7a/libfolly_runtime.so' pickFirst '**/x86/libfolly_runtime.so' pickFirst '**/arm64-v8a/libfolly_runtime.so' pickFirst '**/x86_64/libfolly_runtime.so' } } `
- Install `vision-camera-code-scanner`:
  `yarn add vision-camera-code-scanner`
- Make the following change in `babel.config.js`:
  ` plugins: [ [ 'react-native-reanimated/plugin', { globals: ['__scanCodes'], }, ], ],`
- Now you can use your scanner
