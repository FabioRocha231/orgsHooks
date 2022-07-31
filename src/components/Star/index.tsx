import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

import star from '../../assets/estrela.png';
import starEmpty from '../../assets/estrelaCinza.png';
import { starsStylesFunction } from './styles';

export type StarComponentProps = {
  full: boolean;
  onPress: Function;
};

export const StarComponent = ({
  full,
  onPress,
}: StarComponentProps) => {
  const styles = starsStylesFunction(false);

  const getImage = () => {
    if (full) {
      return star as ImageSourcePropType;
    }
    return starEmpty as ImageSourcePropType;
  };
  return (
    <TouchableOpacity onPress={() => onPress()} >
      <Image style={styles.star} source={getImage()} />
    </TouchableOpacity>
  );
};
