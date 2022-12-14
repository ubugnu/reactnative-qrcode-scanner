# React Native QR-code Scanner

## How to use

This repo contains a ready-to-use forlder, you can clone it and go directly to step "Run the Metro server..." below. Or you can follow step by step to integrate it into an existing project.

## Steps to reproduce the same

- Initialize a react native app based on a typescript template:
  ```bash
  npx react-native init App --template react-native-template-typescript
  ```
- Move the app files to the current directory:
  ```bash
  mv App/{*,.*} . && rm -r App
  ```
- Install `react-native-vision-camera`, follow steps [here](https://github.com/mrousavy/react-native-vision-camera)
  ```bash
  yarn add react-native-vision-camera
  ```
- Add to `android/app/src/main/AndroidManifest.xml` the following:
  ```xml
  <uses-permission android:name="android.permission.CAMERA" />
  ```
- Install `react-native-reanimated`:
  ```bash
  yarn add react-native-reanimated
  ```
- Add to `babel.config.js` the following:
  ```js
  module.exports = {
    presets: [
      //...
    ],
    plugins: [
      //...
      'react-native-reanimated/plugin',
    ],
  };```
- Fix a bug in react-native-reanimated build by adding to `vim android/app/build.gradle` the following:
  ```gradle
  android {
    // ...
    packagingOptions {
      pickFirst '**/armeabi-v7a/libfolly_runtime.so'
      pickFirst '**/x86/libfolly_runtime.so'
      pickFirst '**/arm64-v8a/libfolly_runtime.so'
      pickFirst '**/x86_64/libfolly_runtime.so'
    }
  }```
- Install `vision-camera-code-scanner`:
  `yarn add vision-camera-code-scanner`
- Make the following change in `babel.config.js`:
  ```
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes'],
      },
    ],
  ],
  ```
- Plug your device, or create a virtual one
- Run the Metro server (better reset cache):
```bash
npx react-native start --reset-cache
```
- Build the App:
```bash
npx react-native run-android
```
- Accept authorizations on device
- Now you can use your scanner
