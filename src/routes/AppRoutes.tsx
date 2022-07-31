import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ProducerRoutes from './ProducerRoutes';
import BestProducersRoute from './BestProducerRoutes';
const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ProducerRoutes} />
        <Tab.Screen name="Best Producers" component={BestProducersRoute} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
