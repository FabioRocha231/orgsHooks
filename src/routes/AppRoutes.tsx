import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BestProducersRoutes from './BestProducersRoute';
import ProducerRoutes from './ProducerRoutes';
const Tab = createBottomTabNavigator();

export default function AppRoutes() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={ProducerRoutes}
          options={{
            headerShown: true
          }}
        />

        <Tab.Screen
          name="Best Producers"
          component={BestProducersRoutes}
          options={{
            headerShown: true
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
