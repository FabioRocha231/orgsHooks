import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <AppRoutes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
