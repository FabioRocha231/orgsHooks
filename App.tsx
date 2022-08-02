import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { BestProducersProvider } from './src/context/BestProducersContext';
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <BestProducersProvider>
        <StatusBar />
        <AppRoutes />
      </BestProducersProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
