import React, { useState } from 'react';
import { View } from 'react-native';
import { StarComponent } from '../Star';

import { starsStyles } from './styles';

export type StarsProps = {
  quantity: number | string;
};

export const Stars = ({ quantity: oldQuantity }: StarsProps) => {
  const [quantity, setQuantity] = useState(oldQuantity);

  const RenderStars = () => {
    const starsList = [];
    for (let i = 0; i < 5; i++) {
      starsList.push(
        <StarComponent
          key={i}
          onPress={() => setQuantity(i + 1)}
          full={i < quantity}
        />,
      );
    }
    return <>{starsList}</>;
  };
  return (
    <View style={starsStyles.stars}>
      <RenderStars />
    </View>
  );
};
