import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import BestProducers from './src/screens/BestProducers';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Best Producers" component={BestProducers} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
