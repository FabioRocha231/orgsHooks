/* eslint-disable @typescript-eslint/no-shadow */
import React, { useReducer, useMemo } from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Stars } from '../../../../components/Stars';
import { producerStyles } from './styles';

export type ProducerProps = {
  name: string;
  image: string | ImageSourcePropType;
  distance: number | string;
  stars: number;
  onPress(): void
};

const distanceAndMetersOrKms = (distance: number) => {
  if (distance <= 1000) {
    return `${distance} m`;
  } else if (distance > 1000) {
    return `${(distance / 1000).toFixed(2)} km`;
  }
};

export const ProducerCard = ({ name, image, distance, stars, onPress }: ProducerProps) => {
  //const [selected, invertSelected] = useReducer(selected => !selected, false);

  const distanceText = useMemo(
    () => distanceAndMetersOrKms(distance as number),
    [distance],
  );

  return (
    <TouchableOpacity onPress={onPress} style={producerStyles.card}>
      <Image
        style={producerStyles.image}
        source={image as ImageSourcePropType}
        accessibilityLabel={name}
      />
      <View style={producerStyles.infos}>
        <View>
          <Text style={producerStyles.name}>{name}</Text>
          <Stars quantity={stars} />
        </View>
        <Text style={producerStyles.distance}>{distanceText}</Text>
      </View>
    </TouchableOpacity>
  );
};
