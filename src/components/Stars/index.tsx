import React, {useState} from 'react';
import {View} from 'react-native';
import {StarComponent} from '../Star';

import {starsStyles} from './styles';

export type StarsProps = {
  quantity: number | string;
  editable: boolean;
  big: boolean;
};

export const Stars = ({quantity: oldQuantity, editable, big}: StarsProps) => {
  const [quantity, setQuantity] = useState(oldQuantity);

  const RenderStars = () => {
    const starsList = [];
    for (let i = 0; i < 5; i++) {
      starsList.push(
        <StarComponent
          key={i}
          big={big}
          onPress={() => setQuantity(i + 1)}
          disabled={editable}
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
