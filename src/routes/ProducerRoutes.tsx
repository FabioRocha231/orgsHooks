import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProducerInfos from "../screens/ProducerInfos";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export interface ProducerRoutesProps {
  component: React.ReactNode
}

export default function ProducerRoutes<ProducerRoutesProps>({ component = Home }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={component} />
      <Stack.Screen name="Producer" component={ProducerInfos} />
    </Stack.Navigator>
  )
}
