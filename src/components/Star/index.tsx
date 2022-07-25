import React from 'react';
import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';

import star from '../../assets/estrela.png';
import starEmpty from '../../assets/estrelaCinza.png';
import {starsStylesFunction} from './styles';

export type StarComponentProps = {
  disabled: boolean;
  full: boolean;
  big: boolean;
  onPress: Function;
};

export const StarComponent = ({
  disabled,
  full,
  big,
  onPress,
}: StarComponentProps) => {
  const styles = starsStylesFunction(big);

  const getImage = () => {
    if (full) {
      return star as ImageSourcePropType;
    }
    return starEmpty as ImageSourcePropType;
  };
  return (
    <TouchableOpacity onPress={() => onPress()} disabled={!disabled}>
      <Image style={styles.star} source={getImage()} />
    </TouchableOpacity>
  );
};
