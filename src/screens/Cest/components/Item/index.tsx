import React from 'react';
import {View, Image} from 'react-native';
import {TextStyled} from '../../../../components/Text';
import {ItensProps} from '../../../../mocks/producers';

import {itemStyles} from './styles';

export const Item = ({name, image}: ItensProps) => {
  return (
    <View>
      <Image source={image} style={itemStyles.image} />
      <TextStyled isBold={true} customStyle={itemStyles.name}>
        {name}
      </TextStyled>
    </View>
  );
};
