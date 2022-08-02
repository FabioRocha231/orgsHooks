import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';

export default function ProducerInfos() {
  const route = useRoute();
  console.log(route.params)
  return (
    <Text>Olaaaa Marilene</Text>
  )
}
