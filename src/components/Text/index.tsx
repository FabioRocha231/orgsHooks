import React from 'react';
import {Text} from 'react-native';
import {TextStyledStyles} from './styles';

export type TextStyledPRops = {
  isBold: boolean;
  customStyle: any;
  children: string;
};

export const TextStyled = ({
  isBold,
  customStyle,
  children,
}: TextStyledPRops) => {
  let isBoldStyle = isBold ? TextStyledStyles.boldText : TextStyledStyles.text;
  return <Text style={[isBoldStyle, customStyle]}>{children}</Text>;
};
