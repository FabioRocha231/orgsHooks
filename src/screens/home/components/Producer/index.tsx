import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Stars} from '../../../../components/Stars';
import {producerStyles} from './styles';

export type ProducerProps = {
  name: string;
  image: string | ImageSourcePropType;
  distance: number | string;
  stars: number;
};

export const Producer = ({name, image, distance, stars}: ProducerProps) => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      style={producerStyles.card}>
      <Image
        style={producerStyles.image}
        source={image as ImageSourcePropType}
        accessibilityLabel={name}
      />
      <View style={producerStyles.infos}>
        <View>
          <Text style={producerStyles.name}>{name}</Text>
          <Stars quantity={stars} editable={selected} big={selected} />
        </View>
        <Text style={producerStyles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
};
