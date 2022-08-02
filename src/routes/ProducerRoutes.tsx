import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProducerInfos from "../screens/ProducerInfos";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export type ProducerRoutesParamList = {
  routeComponent?: React.FC
}

export default function ProducerRoutes({ routeComponent = Home }: ProducerRoutesParamList) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={routeComponent}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Producer Info"
        component={ProducerInfos}
        options={{
          headerShown: true
        }}
      />
    </Stack.Navigator>
  )
}
